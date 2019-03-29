export default class userSearch {
  constructor(ailment, doctorName, location) {
    this.ailment = ailment;
    this.doctorName = doctorName;
    this.location = location;
    this.uniqueApiKey = process.env.apiKey;
    this.url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${this.doctorName}&query=${this.ailment}&location=${location}&limit=200&user_key=${this.uniqueApiKey}`;
  }

  doctorSearch() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", this.url, true);
      request.send();
    });
  }
}