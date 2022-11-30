/********************************** */
// IMPORT DEPENDENCIES
/********************************** */
require("dotenv").config()
const Animal = require("./animal")
const mongoose = require("./connection")

/********************************** */
// SEED CODE
/********************************** */
mongoose.connection.on("open", () => {
    // Define data we want to put in the database
    const startingAnimals = [
        { species: "Lepus californicus", extinct: false, location: "United States", lifeExpectancy: "8" },
        {},
        {},
        {},
        {},
        {}
    ]

    // Delete all animals
    Animal.deleteMany({}, (err, data) => {

        // Create new animals once old animals are deleted
        Animal.create(startingAnimals, (err, createdAnimals) => {
            console.log("--------ANIMALS CREATED----------")
            console.log(createdAnimals)
            console.log("--------ANIMALS CREATED----------")

            // Close the DB connection
            mongoose.connection.close()
        })
    })
})

