const contactModel = require("../model/contacts.js");

const ctrl = {};

ctrl.createContact = async (req, res) =>{
    const { fname, lname, email, favColor, bday } = req.body
    const result = await contactModel.create(fname, lname, email, favColor, bday)

    if(result){
        res.status(201).json({message: "Contact created successfully", contact: result})
    } else {
        res.status(500).json({message: "Error creating contact"})
    }
}

ctrl.getContacts = async (req, res) =>{
    const contacts = await contactModel.get()
    if(contacts){
        res.status(200).json(contacts)
    } else {
        res.status(500).json({message: "Error getting contacts"})
    }
}

ctrl.getContactById = async (req, res) =>{
    const id = req.params.id
    const contact = await contactModel.getById(id)
    if(contact){
        res.status(200).json(contact)
    } else {
        res.status(404).json({message: "Contact not found"})
    }
}

module.exports = ctrl