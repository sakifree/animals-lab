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
router.post("/", (req, res) => {
    req.body.isExtinct = req.body.isExtinct === "on" ? true : false
    Animal.create(req.body)
    .then((createdAnimal) => {
        res.redirect("/animals")
    })
    .catch(err => console.log(err))
})

// EDIT ROUTE - GET .. render a form to edit an animal
router.get("/:id/edit", (req, res) => {
    Animal.findById(req.params.id)
    .then((foundAnimal) => {
        res.render("animals/edit.ejs", { animal: foundAnimal })
    })
    .catch(err => console.log(err))
})

// UPDATE ROUTE - PUT .. update the animal with info from a form
router.put("/:id", (req, res) => {
    req.body.isExtinct = req.body.isExtinct === "on" ? true : false
    Animal.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedAnimal) => {
        res.redirect(`/animals/${req.params.id}`)
    })
})

// DELETE ROUTE - DELETE .. deletes the specfied item
router.delete("/:id", (req, res) => {
    Animal.findByIdAndDelete(req.params.id)
    .then((deletedAnimal) => {
        res.redirect("/animals")
    })
    .catch(err => console.log(err))
})

// SHOW ROUTE - GET .. returns a single animal
router.get("/:id", (req, res) => {
    Animal.findById(req.params.id)
    .then((animal) => {
        res.render("animals/show.ejs", { animal })
    })
    .catch(err => console.log(err))
})

/********************************** */
// EXPORT ROUTER
/********************************** */
module.exports = router