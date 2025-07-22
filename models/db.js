/*
Citation:
7/19/2025
Adapted from tutorial for mongoDB/Node.js/Express/Handlebars app
https://kb.objectrocket.com/mongo-db/build-an-application-in-nodejs-express-and-mongodb-part-2-1368

7/19/2025 
Adapted from mongoDB mongoose tutorial
https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/
*/


const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://steve:testing123@cluster0.5jckiya.mongodb.net/application?retryWrites=true&w=majority&appName=Cluster0')
