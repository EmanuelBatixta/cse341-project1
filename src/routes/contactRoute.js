const contactCtrl = require('../controller/contactController.js')
const express = require('express')
const router = express.Router()

router.post("/", contactCtrl.createContact)

router.get("/", contactCtrl.getContacts)

router.get("/:id", contactCtrl.getContactById)

module.exports = router