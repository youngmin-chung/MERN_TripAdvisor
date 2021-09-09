// Week5: Add a new file to the project1 folder called project1routes.js
const express = require("express");
const router = express.Router();
const setupRtns = require("./setupalerts");
const { advcoll } = require("./config");
// Week5: Add a single GET route to execute the setupalerts code
router.get("/", async (req, res) => {
  try {
    let result = await setupRtns.run();
    res.status(200).send(result);
  } catch (err) {
    //console.log(err.stack);
    res.status(500).send("get all users failed - internal server error");
  }
});

// define a post route to  add a user ensure body-parser has been installed
router.post("/", async (req, res) => {
  let conn;
  let data = req.body;
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
  //console.log(date_format_str);

  try {
    let db = await dbRtns.loadDB();
    let advisories = await dbRtns.addOne(db, advcoll, data);
    res.status(200).send(
      advisories.insertedCount > 0
        ? {
            msg: `added advisory on ` + date_format_str
          }
        : { msg: "user was not added" }
    );
  } catch (err) {
    //console.log(err.stack);
    res.status(500).send("post failed - internal server error");
  }
});

module.exports = router;
