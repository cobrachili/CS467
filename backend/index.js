import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import contactRoutes from "./routes/contact.route.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.use("/contacts", contactRoutes)


app.listen(PORT, ()=> {
    connectDB()
    console.log("Server started at http://localhost:" + PORT)
})

