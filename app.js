const express = require('express');
const mongoose = require('mongoose')
const student = require('./routes/student_routes')
const app = express()
const path = require('path')
require('dotenv').config();

app.use(express.json());
app.use('/student', student)


console.log(process.env.URI_MOGOOSE);


mongoose.connect(process.env.URI_MOGOOSE)
  .then(() => {
    console.log('mongoose connected')
    app.listen(process.env.PORT_NO, () => {
      console.log(`Server is listening at ${process.env.PORT_NO}`)
    })
  }).catch((error) => console.error('get error while connecting mongoose'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "view/api_doc.html"))
})





