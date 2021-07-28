const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  isocountries: process.env.ISOCOUNTRIES,
  gocalerts: process.env.GOCALERTS,
  alerturl: process.env.ALERTURL,
  alertcollection: process.env.ALERTCOLLECTION,
  atlas: process.env.DBURL,
  appdb: process.env.DB,
  port: process.env.PORT,
  graphql: process.env.GRAPHQLURL,
  coll: process.env.COLLECTION,
  advcoll: process.env.ADVCOLL
};
