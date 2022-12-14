/********************************** */
// IMPORT DEPENDENCIES
/********************************** */
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const AnimalRouter = require("./controllers/animalcontroller")
const app = express()

/********************************** */
// MIDDLEWARE
/********************************** */
app.use(morgan("dev"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use("/animals", AnimalRouter)

/********************************** */
// SERVER LISTENER
/********************************** */
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Nothing feels better than feeling the love on port: ${PORT}`)
})