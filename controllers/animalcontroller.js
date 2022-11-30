/********************************** */
// IMPORT DEPENDENCIES
/********************************** */
const express = require("express")
const Animal = require("../models/animal")

/********************************** */
// CREATE ROUTER
/********************************** */
const router = express.Router()

/********************************** */
// ROUTES - HOME, SEED, INDUCES (INDEX, NEW, DELETE, UPDATE, CREATE, EDIT, SHOW)
/********************************** */

// INDEX ROUTE
router.get("/", (req, res) => {
    Animal.find({})
    .then((animals) => {
        //res.json(animals)
        res.render("animals/index.ejs", { animals })
    })
    .catch(err => console.log(err))
})

// NEW ROUTE

// CREATE ROUTE 

// EDIT ROUTE

// UPDATE ROUTE

// SHOW ROUTE

/********************************** */
// EXPORT ROUTER
/********************************** */
module.exports = router