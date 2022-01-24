const todoService = require("../api/todo/todoServices")
const express = require("express")
const router = express.Router()

todoService.register(router, "/todos")

module.exports = router
