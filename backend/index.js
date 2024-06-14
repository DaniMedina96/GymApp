require('dotenv').config()
const express = require('express')
const morgan = require('morgan')

const { checkDB, sycnModels } = require("./database")
const defineRelations  = require("./database/relations")

const startDB = async () => {
await checkDB()
await defineRelations()
sycnModels()
}



const app = express()

app.use(morgan('dev'))

app.get("/", (req, res) => {
    res.status(200).send('Hello World!')
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
    startDB();
})

