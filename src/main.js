import userSearch from './js/doctorLookup';
import $ from 'jquery';
import './styles.css';

$(document).ready(function () {
  $('#userSearchForm').submit(function (e) {
    e.preventDefault();
    let ailment = $('#ailment').val();
    let doctorName = $('#doctorName').val();
    let userInput = new userSearch(ailment, doctorName);
    let promise = userInput.doctorSearch();
    promise.then(function (response) {
      let body = JSON.parse(response);
      console.log(body.data.length);
      if (body.data.length === 0) {
        $('.showErrors').text("Your search returned no results");
      } else {
        for (let i = 0; i <= body.data.length; i++) {
          $('#resultDoctorName').text(`${body.data[i].profile.first_name} ${body.data[i].profile.last_name}`);
          $('#resultDoctorAddress').text(`${body.data[i].practices[0].visit_address.street}. ${body.data[i].practices[0].visit_address.city}, ${body.data[i].practices[0].visit_address.state_long}`);
          $('#resultDoctorPhoneNumber').text(`${body.data[i].practices[0].phones[0].number}`);
          if (`${body.data[i].practices[0].website}` === "undefined") {
            $('#resultDoctorWebsite').text("This doctor does not have a website");
          } else {
            $('#resultDoctorWebsite').text(`${body.data[i].practices[0].website}`);
          }
          if (`${body.data[i].practices[0].accepts_new_patients}` === true) {
            $('#resultDoctorNewPatients').text("Yes");
          } else {
            $('#resultDoctorNewPatients').text("No");
          }
        }
        $('#results').show();
      }
    }, function (error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
