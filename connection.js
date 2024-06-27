//import mongoose
const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://achuhari79:sachu@cluster0.pwlfnet.mongodb.net/sampledb1?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected successfully")
})
.catch((error)=>{
    console.log("error detected")
})