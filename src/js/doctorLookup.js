export default class userSearch {
  constructor(ailment, doctorName) {
    this.ailment = ailment;
    this.doctorName = doctorName;
    this.apiKey = process.env.exports.apiKey;
    this.ailmentUrl = `https://api.betterdoctor.com/2016-03-01/doctors?query=${this.ailment}&location=or-portland&limit=50&user_key=${this.apiKey}`;
    this.nameUrl = `https://api.betterdoctor.com/2016-03-01/doctors?name=${this.doctorName}&location=or-portlandlimit=50&user_key=${this.apiKey}`;
  }

  doctorSearchByName() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", this.nameUrl, true);
      request.send();
    });
  }

  doctorSearchByAilment() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", this.ailmentUrl, true);
      request.send();
    });
  }
}