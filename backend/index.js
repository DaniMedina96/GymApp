require('dotenv').config()

const { checkDB, sycnModels } = require("./database")
const defineRelations  = require("./database/relations")

const startDB = async () => {
await checkDB()
await defineRelations()
sycnModels()
}

startDB()