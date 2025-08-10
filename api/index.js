// Date: 7/18/25
// Adapted From
// https://www.youtube.com/watch?v=V8dYGNfHjfk&t=1743s
// Incorporated backend login and signup with nodejs, express & mongodb

// Date: 7/18/25
// Adapted From
// https://dev.to/jakobjingleheimer/configuring-commonjs-es-modules-for-nodejs-12ed
//Learned how to configure commonJs for index.js to work

// Date: 7/19/25
// Adapted From
//https://www.geeksforgeeks.org/web-tech/express-js-res-render-function/
//Learned about render and using locals 

// Date: 7/25/25
// Adapted From
//https://www.geeksforgeeks.org/node-js/how-to-handle-sessions-in-express/
//Learned about express session and setting up app.use

// Date: 7/25/25
// Adapted From
//https://www.mongodb.com/docs/manual/core/document/
//Learned about _id and its usage in mongodb

// Date: 7/28/25
//Adapted From
// https://www.geeksforgeeks.org/mongodb/mongoose-document-model-create-api/\
// Learned about using create for mongoose

// Date 8/4/2025
// Using vercel with express
// https://vercel.com/guides/using-express-with-vercel

const express = require("express")
const app=express()
const path=require("path")
const hbs= require("hbs")
const session = require('express-session')
const { collection1, collection2, Application, contact, connectToDatabase} = require("../DB/db.js")

connectToDatabase();

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json())
app.set("view engine","hbs")
app.set("views", path.join(process.cwd(), "views"));
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res) => {
    res.render("login")
})

app.get("/signup",(req,res) => {
    res.render("signup")
})


app.get("/home", (req, res) => {
     res.render("home")
})

app.get("/skills", async (req, res) => {
  const skills = await collection2.find({ userId: req.session.user._id });
  res.render("skills", { skills });
});

// Handle signup
app.post("/signup",async (req,res) =>{

const { firstname, lastname, email, password } = req.body;

 const user = new collection1({ firstname, lastname, email, password });
 await user.save();


    res.redirect("/");
})

// Handle login
app.post("/login",async (req,res) =>{

const data={
    email:req.body.email,
    password:req.body.password,

}

const user = await collection1.findOne({ email: data.email, password: data.password });

    if (user) {
        req.session.user = user;
        res.render("home",  { firstname: user.firstname })
    } else {
        res.send("Invalid email or password");
    }
})
// Handle skills
app.post("/skills", async (req, res) => {

    const data = {
        userId: req.session.user._id,
        type: req.body.type,
        level: req.body.level,
        category: req.body.category,
    };

    await collection2.create(data);
    res.redirect("/skills");
});


// Display applications
app.get("/applications", async (req, res) => {
  const applications = await Application.find({ userId: req.session.user._id });
  const skills = await collection2.find({ userId: req.session.user._id });
  res.render("applications", { applications, skills });
});

// Add application

app.post("/applications/add", async (req, res) => {

const data = {
    userId: req.session.user._id,
    company: req.body.company,
    type: req.body.type,
    date: req.body.date,
    status: req.body.status,
    skills: req.body.skills
};

await Application.create(data);
res.redirect("/applications");
});

// Delete application route
app.post('/applications/delete/:id', (req, res) => {
  Application.findByIdAndDelete(req.params.id)
    .then(data => res.redirect("/applications"))
    .catch(error => {console.error("Server Error", error)
    res.status(500).json({
            message:"Failed to delete application. Please try again.",
            error: error.message,
    })
    })
})

// Display skills stats
app.get("/stats", async (req, res) => {

    const user = req.session.user;
    const userid = user._id
    

    try {
        // Count total skills
        const totalSkills = await collection2.countDocuments({userid})

        // Generate skills by category
        const skillsByCategory = await collection2.aggregate([
            {$match: {userid}},
            { $group: { _id: "$category", count: { $sum: 1 } } }
        ])

        // Generate skills by level
        const skillsByLevel = await collection2.aggregate([
            {$match: {userid}},
            { $group: { _id: "$level", count: { $sum: 1 } } }
        ])

        // Generate top 5 popular skills
        const popularSkills = await collection2.aggregate([
            {$match: {userid}},
            { $group: { _id: "$type", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 5 }
        ])

        // Render stats page
        res.render('stats', 
            {totalSkills, 
            skillsByCategory, 
            skillsByLevel, 
            popularSkills})

    } catch (err) {
        res.status(500).send("Error generating statistics.")
    }
})

// Get all contacts route
app.get('/contacts', (req, res) => {
    contact
        .find({ userId: req.session.user._id })
        .then(data => {
            res.render("contacts", { contacts: data, layout: false })
        })
        .catch(
            error =>{
                console.error("Error in retrieving contacts", error)
                res.status(500).json({
            message:"Failed to retrieve contacts. Please try again.",
            error: error.message,

    })
})
})


// Add a contact page
app.get('/createOrEdit', (req, res) => {
    res.render("createOrEdit" )
    })

// Read contact
app.get('/createOrEdit/:id', (req,res) => {

    contact
        .findById(req.params.id)
        .then(data => res.render("createOrEdit", { contact: data }))
        .catch(error =>
                {console.error("Error in retrieving contact", error)
                res.status(500).json({
            message:"Failed to retrieve contact. Please try again.",
            error: error.message,
    })
    })
})


// Create new contact
app.post("/createorEdit", (req, res) => {
    const newContact = new contact({
        userId: req.session.user._id,
        name: req.body.name,
        company: req.body.company,
        emailAddress: req.body.emailAddress,
        phoneNumber: req.body.phoneNumber,
    })

    const { _id } = req.body

    // If _id is empty or not provided, create a new contact
    if (!_id) {
        newContact
            .save()
            .then(data => res.redirect("/contacts"))
            .catch(error => {
                console.error("Unable to save contact", error)
                res.status(500).json({
                    message:"Failed to save new contact. Please try again.",
                    error: error.message,
                })
            })
    } else {
        // Update an existing contact by finding _id and passing the updated fields
        contact
            .findByIdAndUpdate(
                _id,
                {
                    name: req.body.name,
                    company: req.body.company,
                    emailAddress: req.body.emailAddress,
                    phoneNumber: req.body.phoneNumber,
                },
                { new: true }
            ) // Returns the updated contact
            .then(data => res.redirect("/contacts"))
            .catch(error => {
                console.error("Unable to update", error)
                res.status(500).json({
                    message:"Failed to update contact. Please try again.",
                    error: error.message,
                })
            })
    }
})

// Delete contact route
app.post('/contact/delete/:id', (req, res) => {
  contact.findByIdAndDelete(req.params.id)
    .then(data => res.redirect("/contacts"))
    .catch(error => {console.error("Server Error", error)
    res.status(500).json({
            message:"Failed to delete contact. Please try again.",
            error: error.message,
    })
    })
})




module.exports = app;