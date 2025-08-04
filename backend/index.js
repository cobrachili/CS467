/* Citation
// Date: 7/19/25
// Adapted From:
// https://www.youtube.com/watch?v=9VHTDhwo9u0
// How to use express handlebar to render pages

// Accessed: 7/19/2025
// https://iamwebwiz.medium.com/how-to-fix-dirname-is-not-defined-in-es-module-scope-34d94a86694d
// Learned how to fix CommonJS issues with ES modules */

const express = require("express") 
const dotenv = require ("dotenv")
const path = require ("path")
const connectDB = require("./config/db.js") 
const { engine } = require("express-handlebars")
const bodyParser = require ("body-parser")

dotenv.config()


const app = express()
const PORT = process.env.PORT

// Middleware
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())



// Routes
const contactRoutes = require("./controllers/contact.controller.js")
app.use("/contacts", contactRoutes)

// View engine setup
app.set("views", path.join(__dirname, "views"))
console.log(__dirname)

app.engine(
    ".hbs",
    engine({
        extname: "hbs",
        layoutsDir: path.join(__dirname, "/views/layouts"),
        defaultLayout: false,
    })
)
app.set("view engine", "hbs")


// DB connection
app.listen(PORT, () => {
    connectDB()
    console.log("Server started at http://localhost:" + PORT)
})
