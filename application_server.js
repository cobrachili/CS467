/*
Citation:
7/19/2025
Adapted from tutorial for mongoDB/Node.js/Express/Handlebars app
https://kb.objectrocket.com/mongo-db/build-an-application-in-nodejs-express-and-mongodb-part-2-1368

7/19/2025
Adapted from OSU node starter app, handlebars an express setup
https://github.com/osu-cs340-ecampus/nodejs-starter-app

7/20/2025
How to setup a get route in express
https://www.geeksforgeeks.org/node-js/node-js-crud-operations-using-mongoose-and-mongodb-atlas/

*/

require('./models/db');
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const Application = require('./models/applications.model');
const PORT = 5050;

const app = express();

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: false, layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');



app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use(express.static(__dirname + '/public'));


// Routes
app.get('/applications', function (req, res) {
    Application.find(function (err, applications) {
        if (err) {
        console.error(err);
        } 
        else {
        res.render("applications", {applications});
        }
    });
});



app.listen(PORT, () => {
  console.log(`Now starting at port: ${PORT}`);
});