const mongoose = require("mongoose")
mongoose.Promise = global.Promise

async function connect() {
    return await mongoose.connect(process.env.MONGODB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

async function close() {
    return await mongoose.connection.close()
}

module.exports = { connect, close }
