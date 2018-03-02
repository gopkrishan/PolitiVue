const axios = require("axios")

const myFederalRepsApi = {
  getUpcomingElections: function (zip) {
    return new Promise((resolve, reject) => {
      let url = `https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyAov7i7_mVL5By-cvqtCJ_Gi2VYrnCPHW4`
      axios
        .get(url)
        .then(response => {
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  getRepsByZipcode: function (zip) {
    return new Promise((resolve, reject) => {
      let url = `https://www.googleapis.com/civicinfo/v2/representatives?address=${zip}&key=AIzaSyAov7i7_mVL5By-cvqtCJ_Gi2VYrnCPHW4`
      axios
        .get(url)
        .then(response => {
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  getUSArepsForHome: function () {
    return new Promise ((resolve, reject) => {
      let url = `https://www.googleapis.com/civicinfo/v2/representatives/ocd-division%2Fcountry%3Aus?key=AIzaSyAov7i7_mVL5By-cvqtCJ_Gi2VYrnCPHW4`
      axios.get(url)
        .then(response => {
          resolve(response)
        }).catch(err => reject(err))
    })
  }

}


module.exports = myFederalRepsApi





