# Doctor Lookup
## by Tanner Damron

## Description
This web application will let a user search by ailment and a list of doctor's that can treat that ailment will show. This web application will also allow users to search by doctor name and find that specific doctor's information, user can also search doctors by location if entered correctly.

## Specifications
* User can enter ailment in search bar and a list of doctors will show up with all doctor information
* > Input: "sore throat"
* > Output: "John Lee	325 9th Ave. Seattle, Washington	2065205000	No website	Yes"
* User can enter doctor name in search bar and that doctor will show up
* > Input: "John Lee"
* > Output: "John Lee	325 9th Ave. Seattle, Washington	2065205000	No website	Yes"
* User can enter location in search bar and doctors in that location will show up
* > Input: "wa-seattle"
* > Output: "John Lee	325 9th Ave. Seattle, Washington	2065205000	No website	Yes"

### Setup Instructions
Download Node.js

* Clone repository
* Add it to your desktop using "git clone "https://github.com/tannerdamron/Doctor_Lookup"
* Open in preferred text editor to see all code used
* You must add personal API key to a .env file:
* > Go to "https://developer.betterdoctor.com" and sign up to get unique API key
> * Create .env file in root directory
> * Add "exports.apiKey=(unique api key)" in the .env file and save
* To run application:
* > Navigate to root directory in terminal
* > Run the command "$ npm install" to install all dependencies in the package.JSON file
* > Run the command "$ npm run build" to build application
* > Run the command "$ npm run start" to start application
* To run tests on application:
* > Navigate to root directory in terminal
* > Run the command "npm run test"

### Known Bugs
* Latitude and Longitude search doesn't work correctly

### Languages/Libraries Used
* HTML
* CSS
* Bootstrap
* JavaScript
* Node.js
* Jasmine
* Karma

### GitHub Repository Link
https://github.com/tannerdamron/Doctor_Lookup

### Support or Contact
* For any questions or suggestions email me at tanner.mdamron@gmail.com

Copyright (c) 2019 Tanner Damron.