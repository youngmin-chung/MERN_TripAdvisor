/* Title: alertsetup.js
 * Name: Youngmin Chung
 * Student #: 0816299
 * Description: It's for setting up alert message
 */

const util = require("./utilities");
const dbRtns = require("./dbroutines");
const { alerturl, isocountries, alertcollection } = require("./config");

const run = async () => {
  try {
    db = await dbRtns.loadDB();

    let msgResult = "";

    let results = await dbRtns.deleteAll(db, alertcollection);
    let msg1 = `Deleted ${results.deletedCount} documents from ${alertcollection} collection.`;
    console.log(msg1);
    msgResult += msg1;

    let alertsJSON = await util.getJSONFromWWWPromise(alerturl);
    let msg2 = `Retrieved Alert JSON from remote web site.`;
    console.log(msg2);
    msgResult += msg2;

    let countryJson = await util.getJSONFromWWWPromise(isocountries);
    let msg3 = `Retrieved Country JSON from remote web site.`;
    console.log(msg3);
    msgResult += msg3;

    await Promise.allSettled(
      countryJson.map(async isocountry => {
        let countryCode = isocountry["alpha-2"].toString();
        let isocountries;
        try {
          isocountries = {
            country: isocountry["alpha-2"],
            name: isocountry.name,
            text: alertsJSON.data[countryCode].eng["advisory-text"].toString(),
            date: alertsJSON.data[countryCode][
              "date-published"
            ].date.toString(),
            region: isocountry.region,
            subregion: isocountry["sub-region"]
          };
        } catch (error) {
          isocountries = {
            country: isocountry["alpha-2"],
            name: isocountry.name,
            text: "No travel alerts",
            date: "",
            region: isocountry.region,
            subregion: isocountry["sub-region"]
          };
        }
        let results = await dbRtns.addOne(db, alertcollection, isocountries);
      })
    );

    let allCountriesFromDb = await dbRtns.findAll(db, alertcollection, {}, {});
    let msg4 = `Added approximately ${allCountriesFromDb.length} new documents to the ${alertcollection} collection.`;
    console.log(msg4);
    msgResult += msg4;

    return msgResult;
  } catch (err) {
    console.log(err);
  } finally {
    //process.exit();
  }
  process.exit();
};

module.exports = { run };
