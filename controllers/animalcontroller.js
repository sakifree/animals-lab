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

// INDEX ROUTE - GET
router.get("/", (req, res) => {
    Animal.find({})
    .then((animals) => {
        //res.json(animals)
        res.render("animals/index.ejs", { animals })
    })
    .catch(err => console.log(err))
})

// NEW ROUTE - GET.. render a page with a form to create a new animal
router.get("/new", (req, res) => {
    res.render("animals/new.ejs")
})

// CREATE ROUTE - POST .. receive the data from the form and create a new animal

// EDIT ROUTE - GET .. render a form to edit an animal

// UPDATE ROUTE - PUT .. update the animal with info from a form

// DELETE ROUTE - DELETE .. deletes the specfied item

// SHOW ROUTE - GET .. returns a single animal
router.get("/:id", (req, res) => {
    Animal.findById(req.params.id)
    .then((animal) => {
        res.render("animals/show.ejs", { animal })
    })
})

/********************************** */
// EXPORT ROUTER
/********************************** */
module.exports = router