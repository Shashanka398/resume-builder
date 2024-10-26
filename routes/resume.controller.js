
const express = require("express")
const router = express.Router()
const {getModifiedData} = require("../controller/resumeBuilder.controller")
console.log("Entere route")
router.post("/build-resumne", getModifiedData)
module.exports = router