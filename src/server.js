require("dotenv").config()
const cors = require("cors")
const express = require("express")
const router = require("./api/routes")
const mongodb = require("./config/database")
const app = express()
const port = process.env.PORT || 3333

app.use(cors({
    origin: "*"
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

async function start() {
    await mongodb.connect()
        .catch(err => console.log("MongoDB connection Failed!\n" + err))
    app.listen(port, () => console.log(`Server listening on port: ${port}`))
}

async function stop() {
    await mongodb.close()
}

module.exports = { start, stop }