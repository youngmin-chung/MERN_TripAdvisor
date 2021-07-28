/* Title: resolver.js
 * Name: Youngmin Chung
 * Student #: 0816299
 * Description: It's for resolver
 */

const dbRtns = require("./dbroutines");
const { coll, alertcollection, advcoll } = require("./config");
const setupRtns = require("./setupalerts");
const resolvers = {
  // alerts
  alerts: async () => {
    let db = await dbRtns.loadDB();
    return await dbRtns.findAll(db, alertcollection, {}, {});
  },
  // alertsforregion
  alertsforregion: async args => {
    let db = await dbRtns.loadDB();
    return await dbRtns.findAll(
      db,
      alertcollection,
      { region: args.region },
      {}
    );
  },
  // alertsforsubregion
  alertsforsubregion: async args => {
    let db = await dbRtns.loadDB();
    return await dbRtns.findAll(db, alertcollection, {
      subregion: args.subregion
    });
  },
  // regions
  regions: async () => {
    let db = await dbRtns.loadDB();
    let result = await dbRtns.findAll(db, alertcollection, {}, {});
    // get distinct region values
    return [...new Set(result.map(x => x.region))];
  },
  // subregions
  subregions: async () => {
    let db = await dbRtns.loadDB();
    let result = await dbRtns.findAll(db, alertcollection, {}, {});
    // get distinct subregion values
    return [...new Set(result.map(x => x.subregion))];
  },
  // setupalerts
  setupalerts: async () => {
    let db = await dbRtns.loadDB();
    return await setupRtns.run();
  },
  // advisory
  advisory: async args => {
    let db = await dbRtns.loadDB();
    let result = await dbRtns.findAdvAll(db, advcoll, {}, {});
    return [...new Set(result.map(x => x.user))];
  },
  // nameforadvisory
  nameforadvisory: async args => {
    let db = await dbRtns.loadDB();
    return await dbRtns.findAdvAll(db, advcoll, { user: args.user }, {});
  },
  // postadvisory
  postadvisory: async args => {
    var d = new Date();
    d = new Date(d.getTime() - 3000000);
    var date_format_str =
      d.getFullYear().toString() +
      "-" +
      ((d.getMonth() + 1).toString().length == 2
        ? (d.getMonth() + 1).toString()
        : "0" + (d.getMonth() + 1).toString()) +
      "-" +
      (d.getDate().toString().length == 2
        ? d.getDate().toString()
        : "0" + d.getDate().toString()) +
      " " +
      (d.getHours().toString().length == 2
        ? d.getHours().toString()
        : "0" + d.getHours().toString()) +
      ":" +
      ((parseInt(d.getMinutes() / 5) * 5).toString().length == 2
        ? (parseInt(d.getMinutes() / 5) * 5).toString()
        : "0" + (parseInt(d.getMinutes() / 5) * 5).toString()) +
      ":00";

    let db = await dbRtns.loadDB();
    let advisory = {
      user: args.user,
      name: args.name,
      text: args.text,
      date: args.date
    };
    let results = await dbRtns.addAdvOne(db, advcoll, advisory);
    if (results.insertedCount > 0) {
      var msg = `added advisory on ${date_format_str}`;
    }
    return results.insertedCount === 1 ? advisory : null;
  }
};
module.exports = { resolvers };
