const request = require("request");

// Week3 : Create a new JavaScript file called utilities.js
//         Copy the getJSONFROMWWWPromise routine from the exercises into the new utilities.js
const getJSONFromWWWPromise = src_url => {
  return new Promise((resolve, reject) => {
    request(
      {
        url: src_url,
        json: true
      },
      (error, response, body) => {
        if (error) {
          reject("unable to connect to servers");
        } else if (response.statusCode === 200) {
          resolve(body);
        }
      }
    );
  });
};

module.exports = {
  getJSONFromWWWPromise
};
