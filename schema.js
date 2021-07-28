/* Title: schema.js
 * Name: Youngmin Chung
 * Student #: 0816299
 * Description: It's for setting up schema
 */

const { buildSchema } = require('graphql')
const schema = buildSchema(`
type Query {
    alerts: [Alert],
    setupalerts: String,
    alertsforregion(region: String): [Alert],
    alertsforsubregion(subregion: String): [Alert],
    regions: [String],
    subregions: [String],
    advisory: [String],
    nameforadvisory(user: String): [Advisory]
}
type Alert {
    country: String
    name: String
    text: String
    date: String
    region: String
    subregion: String
    }
type Advisory {
    user: String
    name: String
    text: String
    date: String
}
type Mutation {
    postadvisory(user: String, name: String, text: String, date: String): Advisory
    }
`)

module.exports = { schema }
