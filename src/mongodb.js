//https://www.youtube.com/watch?v=V8dYGNfHjfk&t=1743s

const mongoose =require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginSignUp")
.then(()=>{
   console.log("mongodb connected"); 
})
.catch(() =>{
    console.log("failed to connect");
})
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
    }
    
})


const collection1=new mongoose.model("Collection1",SignUpSchema)


module.exports = { collection1};