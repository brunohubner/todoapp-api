const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

mongoose.connect(process.env.MONGODB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("[mongodb] Connected"))
    .catch(err => console.log("Não foi possível se conectar ao MongoDB\n" + err))

module.exports = mongoose