const todoService = require("../api/todo/todoServices")
const express = require("express")

module.exports = app => {
    const router = express.Router()
    app.use('/api', router)

    todoService.register(router, '/todos')
}