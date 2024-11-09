const studentData=require('../model/student_model')

exports.addStudent=async(req,res) =>{
    let data = req.body;
    console.log({data});
    if(!data.name || !data.age || !data.phone || !data.course || !data.profile ){
        return  res.json({
              success : false,
              item : 'all fields are required'
          })
    }
        const student=new studentData(data)
        student.save();
        console.log({data});
    
    return res.json({
        success : true,
        item : data
    })
}