import userSearch from './doctorLookup';
import $ from 'jquery';

$(document).ready(function () {
  let ailment = $('#ailment').val();
  let doctorName = $('#doctorName').val();
  let userInput = new userSearch(ailment, doctorName);
  let promise = userInput.doctorSearchByName();
  promise.then(function(response) {
    let body = JSON.parse(response);
    $('#results').text(`${body.name}`);
  }, function (error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });
});
