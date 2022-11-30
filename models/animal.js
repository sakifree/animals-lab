/********************************** */
// IMPORT DEPENDENCIES
/********************************** */
const mongoose = require("./connection")

/********************************** */
// ANIMALS MODEL
/********************************** */
const { Schema, model } = mongoose

const animalsSchema = new Schema({
    species: String,
    extinct: Boolean,
    location: String,
    lifeExpectancy: Number
})

const Animal = model("Animal", animalsSchema)

/********************************** */
// EXPORT MODEL
/********************************** */
module.exports = Animal