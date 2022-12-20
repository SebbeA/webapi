const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    firstName: {type: String, require: [true, 'Please enter a first name']},
    lastName: {type: String, require: [true, 'Please enter a last name']},
    email: {type: String, require: [true, 'Please enter an email adress'], unique: true},
    password: {type: String, require: [true, 'Please enter a password']},
})

module.exports = mongoose.model("users", userSchema)