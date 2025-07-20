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

const express = require("express")
const app=express()
const path=require("path")
const hbs= require("hbs")
const { collection1} = require("./mongodb")

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
});

// Handle signup
app.post("/signup",async (req,res) =>{

const data={
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    password:req.body.password,
    repeatpassword:req.body.repeatpassword,

};

await collection1.insertMany([data]);


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
        res.render("home",  { firstname: user.firstname })
    } else {
        res.send("Invalid email or password");
    }
})

app.listen(3131,() => {
    console.log("port connected")
});

