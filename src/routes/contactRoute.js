const contactCtrl = require('../controller/contactController.js')
const express = require('express')
const router = express.Router()


router.get("/", contactCtrl.getContacts)

router.get("/:id", contactCtrl.getContactById)

router.post("/", contactCtrl.createContact)

router.put("/:id", contactCtrl.updateContact)

router.delete("/:id", contactCtrl.deleteContact)

module.exports = router