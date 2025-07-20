//https://www.youtube.com/watch?v=V8dYGNfHjfk&t=1743s


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
        res.render("home");
    } else {
        res.send("Invalid email or password");
    }
})

app.listen(3131,() => {
    console.log("port connected")
});

