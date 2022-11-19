/********************************** */
// IMPORT DEPENDENCIES
/********************************** */
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")

const app = express()

/********************************** */
// DATABASE CONNECTION
/********************************** */
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(DATABASE_URL, CONFIG)

mongoose.connection
    .on("open", () => console.log("Connected to Mongoose"))
    .on("close", () => console.log("Disconnected to Mongoose"))
    .on("error", () => console.log(error))

/********************************** */
// ANIMALS MODEL
/********************************** */

/********************************** */
// MIDDLEWARE
/********************************** */

/********************************** */
// ROUTES - HOME, SEED, INDUCES
/********************************** */

// HOME ROUTE
app.get("/", (req, res) => {
    res.send("SERVER WORKING!!")
})

// SEED ROUTE

// INDEX ROUTE

// NEW ROUTE

// DELETE ROUTE

// UPDATE ROUTE

// CREATE ROUTE

// EDIT ROUTE

// SHOW ROUTE

/********************************** */
// SERVER LISTENER
/********************************** */
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Nothing feels better than feeling the love on port: ${PORT}`)
})