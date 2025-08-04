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

// Database connection setup
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://steve:testing123@cluster0.5jckiya.mongodb.net/application?retryWrites=true&w=majority&appName=Cluster0")

const db = mongoose.connection;

db.on("error", (error) => {
  console.error(error);
});

db.once("open", () => {
  console.log("Database Connected");
});

// Express and Handlebars setup
const {create} = require('express-handlebars');
const express = require('express');
const { handlebars } = require('hbs');
const app = express();

const hbs = create()

app.engine("handlebars", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");
const path=require("path")
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:false}))


// Applications Schema
const applicationSchema = new mongoose.Schema({
  company: String,
  type: String,
  date: Date,
  status: String,
});

const Application = mongoose.model('Application', applicationSchema);


// Routes

// Display applications
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

// Add application
app.post('/applications/add', function (req, res) {
    const newApplication = new Application({
        company: req.body.company,
        type: req.body.type,
        date: req.body.date,
        status: req.body.status
    });

    newApplication.save()
        .then(() => {
        res.redirect('/applications');
        })
        .catch(err => {
        res.send("Error posting to Database");
        });
    });

app.post('/applications/delete/:id', (req, res) => {
  Application.findByIdAndDelete(req.params.id)
    .then(data => res.redirect('/applications'))
    .catch(err => console.log('error deleting application:', err));
});


// Setup port and start server
const PORT = 5050;

app.listen(PORT, () => {
  console.log(`Now starting at port: ${PORT}`);
});