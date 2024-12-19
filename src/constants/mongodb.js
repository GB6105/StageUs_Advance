const client = require("mongodb").MongoClient

const connect = client.connect("mongodb://localhost:27017")

module.exports = connect