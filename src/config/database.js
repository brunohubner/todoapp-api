const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

mongoose.connect(process.env.MONGODB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("[mongodb] Success connection"))
    .catch(err => console.log("[mongodb] Failed connection\n" + err.message))

module.exports = mongoose