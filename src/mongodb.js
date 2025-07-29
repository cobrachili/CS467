// Date: 7/18/25
// Adapted From
//https://www.youtube.com/watch?v=V8dYGNfHjfk&t=1743s
//Learned how to create a localhost for mongo db

//https://mongoosejs.com/docs/schematypes.html
//Learned about schema type as well as incorporated some_id schema for user id.
const mongoose =require("mongoose")

mongoose.connect('mongodb+srv://steve:testing123@cluster0.5jckiya.mongodb.net/application?retryWrites=true&w=majority&appName=Cluster0')

const db = mongoose.connection;

db.on("error", (error) => {
  console.error(error);
});

db.once("open", () => {
  console.log("Database Connected");
});


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
        jobAppNum: {
            type: Number,
            required: [true, "Please enter job application #"],
            default: "1",
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
  company: String,
  type: String,
  date: Date,
  status: String,
});

const Application = mongoose.model('Application', applicationSchema);
module.exports = { collection1, collection2, Application, contact};
