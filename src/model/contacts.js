const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    favColor: String,
    bday: String
})

const model = mongoose.model('contact', contactSchema)

const user = {};

user.create = async (fname, lname, email, favColor, bday) => {
    try{
        const result = await model.create({fname, lname, email, favColor, bday})
        return result
    } catch(e){
        throw new Error("Error creating contact: " + e.message)
    }
}

user.get = async () =>{
    try{
        const result = await model.find()
        
        return result
    } catch(e){
        throw new Error("Error getting contacts: " + e.message)
    }
}

user.getById = async (id) =>{
    try{
       const result = await model.findById(id)

        return result
    } catch(e){
        throw new Error("Error getting contact by ID: " + e.message)
    }
}

user.update = async (id, contactData) => {
    try{
        const result = await model.findByIdAndUpdate(id, contactData, {new: true})

        return result
    } catch(e){
        throw new Error("Error updating contact: " + e.message)
    }
}

user.delete = async (id) => {
    try{
        const result = await model.findByIdAndDelete(id)

        return result
    } catch(e){
        throw new Error("Error deleting contact: " + e.message)
    }
}

module.exports = user;