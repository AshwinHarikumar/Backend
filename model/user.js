const mongoose = require ('mongoose')//import mongoose
const schema = mongoose.Schema({

    Name:String,
    Age:Number,
    Place:String,
    Phone:Number

})//exportmodel 

const userModel= mongoose.model("user",schema);//creating a user model(even written singular plural will be automatically exported)

module.exports=userModel;//exporting mongoose usermodel