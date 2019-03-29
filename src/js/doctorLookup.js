export default class userSearch {
  constructor(ailment, doctorName) {
    this.ailment = ailment;
    this.doctorName = doctorName;
    this.uniqueApiKey = process.env.apiKey;
    this.url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${this.doctorName}&query=${this.ailment}&location=wa-seattle&limit=50&user_key=${this.uniqueApiKey}`;
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