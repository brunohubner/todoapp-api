require("./config/database")

const cors = require("./config/cors")
const express = require("express")
const app = express()
const host = "localhost"
const port = 3333

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors)

require("./api/routes")(app)

app.listen(port, () => console.log(`[backend] Running in ${host}:${port}`))