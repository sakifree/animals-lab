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
        { name: "Jackrabbit", species: "Lepus californicus", isExtinct: false, location: "North America", lifeExpectancy: "8" },
        { name: "Alpaca", species: "Vicugna pacos", isExtinct: false, location: "South America", lifeExpectancy: "20" },
        { name: "Moose", species: "Alces alces", isExtinct: false, location: "Europe", lifeExpectancy: "16" },
        { name: "Aardvark", species: "Orycteropus afer", isExtinct: false, location: "Africa", lifeExpectancy: "23" },
        { name: "Woolly Mammoth", species: "Mammuthus primigenius", isExtinct: true, location: "Asia", lifeExpectancy: "80" },
        { name: "Allosaurus", species: "Allosaurus fragilis", isExtinct: true, location: "North America", lifeExpectancy: "28" }
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

