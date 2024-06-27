//1.import express
var express = require('express');
require('./connection');//connection not used again hence no variable
const user=require('./model/user')
//2.initialization

var app =express();
//middleware
app.use(express.json());

//3.api
app.get('/add',(req,res)=>{
    res.send("hello");
})
app.get('/login',(req,res)=>{//async wait for getting request
    res.send("You have logged in successfully");
})

//to add data to db //post addsomething to db
app.post('/add',async(req,res)=>{

    try {

        console.log(req.body);
        await user(req.body).save()
        res.send({message:"data added sucessfully!!!"})//messsage to display 
    } catch (error) {
        console.log(error)
    }

})

//to view all the users
app.get('/view',async(req,res)=>{
    try {
       
        const data=await user.find();
        res.send(data);
        
    } catch (error) {
        console.log(error);
    }
})

// to delete any user
app.delete('/remove/:id',async(req,res)=>{
    try {
        console.log(req.params.id);
        var data=await user.findByIdAndDelete(req.params.id);
        res.send({message:"deleted successfully"})
        
    } catch (error) {
        console.log(error)
    }
})

//to update a user
app.put('/edit/:id',async(req,res)=>{
    console.log("up")
    try {
        var data=await user.findByIdAndUpdate(req.params.id,req.body);
        res.send({message:'updated successfully',data})
    } catch (error) {
        console.log(error)
    }
})

//4.port allocation 

app.listen(3000,()=>{
    console.log("port is up and running")
})