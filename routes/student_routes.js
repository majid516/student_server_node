const studentData = require('../model/student_model');
const studentRouter = require('express').Router()
const studentController= require('../controllers/studentController')


studentRouter.get("/",async(req,res) => {
    res.json({
        success : true,
        body : await studentData.find()
    })
})

studentRouter.post("/add", studentController.addStudent)









module.exports = studentRouter