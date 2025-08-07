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

// Date: 7/18/25
// Adapted From
//https://www.youtube.com/watch?v=V8dYGNfHjfk&t=1743s
//Learned how to create a localhost for mongo db

// Date: 7/26/25
// Adapted From
//https://mongoosejs.com/docs/schematypes.html
//Learned about schema type as well as incorporated some_id schema for user id.

// Date 8/2/25
// Using related documents in mongodob:
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose

const mongoose =require("mongoose")


const SignUpSchema= new mongoose.Schema({
     firstname:{
        type:String,
        required:true
    },
     lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
      password:{
        type:String,
        required:true
    },
     applications:{
        type:[{type: mongoose.Schema.Types.ObjectId, ref: "applications"}],
    },
     skills:{
        type:mongoose.Schema.Types.ObjectId, ref: "Skills",
    },
     contacts:{
        type: mongoose.Schema.ObjectId, ref: "Contacts",
    }
 
    
})
const collection1=new mongoose.model("Collection1",SignUpSchema)

const skillSchema= new mongoose.Schema({
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Collection1", 
    required: true
 },
  type:{
        type:String,
        required:false
    },
    level:{
        type:String,
        required:false
    },
    category:{
        type:String,
        required:false
    }
})
const collection2=new mongoose.model("collection2",skillSchema)


const contactSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Collection1", 
            required: true
        },
        name: {
            type: String,
            required: [true, "Please enter First and Last name"],
            default: "John Smith",
        },

        company: {
            type: String,
            required: [true, "Please enter company name"],
            default: "Company",
        },

        emailAddress: {
            type: String,
            required: [true, "Please enter email address"],
            default: "name@email.com",
        },

        phoneNumber: {
            type: String,
            required: [true, "Please enter phone numbwer"],
            default: "123-456-7890",
        },
    },
    {
        timestamps: true, // createdAt, updatedAt
    }
)
const contact = mongoose.model("contact", contactSchema)

// Applications Schema
const applicationSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Collection1", 
        required: true
 },
    company:{
        type:String,
        required:false
    },
    type:{
        type:String,
        required:false
    },
    date:{
        type: Date,
        required:false
    },
    status:{
        type:String,
        required:false
    },
    skills:{
        type:mongoose.Schema.Types.ObjectId, ref: "collection2",
    },
})

const Application=new mongoose.model("applications",applicationSchema)

// module.exports = { collection1, collection2, Application };


app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json())
app.set("view engine","hbs")
app.set("views")
app.use(express.urlencoded({extended:false}))

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


app.listen(3000,() => {
    console.log("port connected")
});

module.exports = app;