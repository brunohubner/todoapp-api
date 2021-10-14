const express = require("express")
const app = express()
const host = "localhost"
const port = 3333

require("./config/database")

app.get("/", (req, res) => {
    res.json({
        status: "201"
    })
})

app.listen(port, () => console.log(`[backend] Running in ${host}:${port}`))