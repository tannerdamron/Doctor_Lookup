import userSearch from './js/doctorLookup';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {
  $('#userSearchForm').submit(function (e) {
    e.preventDefault();
    $('#noResults').hide();
    let ailment = $('#ailment').val();
    let doctorName = $('#doctorName').val();
    let location = $('#location').val();
    $('.hidden').show();
    let newPatients = "";
    let website = "";
    let userInput = new userSearch(ailment, doctorName, location);
    let promise = userInput.geocodeLocation();
    promise.then(function (response) {
      let mapResponse = JSON.parse(response);
      let latLong = "" + mapResponse["results"][0]["locations"][0]["latLng"]["lat"] + `%2C` + mapResponse["results"][0]["locations"][0]["latLng"]["lng"] + "%2C50";
      return userInput.doctorSearch(latLong);
    })
      .then(function (response) {
        let body = JSON.parse(response);
        if (body.data.length === 0) {
          $('#noResults').text("Your search returned no results").show();
          $('#results').hide();
        }
        for (let i = 0; i < body.data.length; i++) {
          $("#table").append(`<tr id=${i}></tr>`);
        }
        for (let i = 0; i <= body.data.length; i++) {
          if (body.data[i].practices[0].accepts_new_patients === true) {
            newPatients = "Yes";
          } else {
            newPatients = "No";
          }
          if (body.data[i].practices[0].website === undefined) {
            website = "No website";
          } else {
            website = body.data[i].practices[0].website;
          }
          $('#' + i).html(`
        <td>${body.data[i].profile.first_name}</td>
        <td>${body.data[i].profile.last_name}</td>
        <td> ${body.data[i].practices[0].visit_address.street}. ${body.data[i].practices[0].visit_address.city}, ${body.data[i].practices[0].visit_address.state_long}</td>
        <td>${body.data[i].practices[0].phones[0].number}</td>
        <td>${website}</td>
        <td>${newPatients}</td>`);
        }
      }, function (error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    $('#results').show();
  });
});