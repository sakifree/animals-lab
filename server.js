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