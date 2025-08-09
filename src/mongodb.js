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

mongoose
    .connect(
        "mongodb+srv://steve:testing123@cluster0.5jckiya.mongodb.net/application?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
        console.log("mongodb connected")
    })
    .catch(() => {
        console.log("failed to connect")
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

// Contacts Schema
const contactSchema = new mongoose.Schema(
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
const contact = new mongoose.model("contact", contactSchema)

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

module.exports = { collection1, collection2, Application, contact };