/* Title: dbroutines.js
 * Name: Youngmin Chung
 * Student #: 0816299
 * Description: It's for dbroutines
 */

// Week4: Copy the dbroutines.js to the case study project
const MongoClient = require("mongodb").MongoClient;
let request = require("request");
const { atlas, appdb } = require("./config");
let db;
const loadDB = async () => {
  if (db) {
    //console.log("using established connection");
    return db;
  }
  try {
    //console.log("establishing new connection to Atlas");
    const client = await MongoClient.connect(atlas, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    db = client.db(appdb);
  } catch (err) {
    //console.log(err);
  }
  return db;
};

const addOne = (db, coll, doc) => db.collection(coll).insertOne(doc);

const addAdvOne = (db, advcoll, doc) => db.collection(advcoll).insertOne(doc);

const deleteAll = (db, coll) => db.collection(coll).deleteMany({});

const findOne = (db, coll, criteria) => db.collection(coll).findOne(criteria);

const findAll = (db, coll, criteria, projection) =>
  db
    .collection(coll)
    .find(criteria)
    .project(projection)
    .toArray();

const getJSONFromWWWPromise = src_url => {
  return new Promise((resolve, reject) => {
    request(
      {
        url: src_url,
        json: true
      },
      (error, response, body) => {
        if (error) {
          reject("unable to connect to GitHub servers");
        } else if (response.statusCode === 200) {
          resolve(body);
        }
      }
    );
  });
};

const findAdvAll = (db, advcoll, criteria, projection) =>
  db
    .collection(advcoll)
    .find(criteria)
    .project(projection)
    .toArray();

module.exports = {
  loadDB,
  addOne,
  deleteAll,
  findOne,
  findAll,
  getJSONFromWWWPromise,
  addAdvOne,
  findAdvAll
};
