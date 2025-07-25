/*
Citation:
7/19/2025
Adapted from tutorial for mongoDB/Node.js/Express/Handlebars app
https://kb.objectrocket.com/mongo-db/build-an-application-in-nodejs-express-and-mongodb-part-2-1368

7/19/2025 
Adapted from mongoDB mongoose tutorial
https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/

7/19/2025
module.exports was adapted in place of export default because of an error.
https://medium.com/@devq/the-difference-between-module-export-and-export-default-740039fed547
*/

const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  company: String,
  type: String,
  date: Date,
  status: String,
});

const Application = mongoose.model('Application', applicationSchema);
module.exports = Application;