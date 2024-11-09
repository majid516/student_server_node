const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    "name" : {
        type : String,
        required : true
    },
    "age" : {
        type : String,
        required : true
    },
    "phone" : {
        type : String,
        required : true
    },
    "course" : {
        type : String,
        required : true
    },
    "profile" : {
        type : String,
        required : true
    }
})

const studentModel = mongoose.model('Student',StudentSchema)

module.exports = studentModel