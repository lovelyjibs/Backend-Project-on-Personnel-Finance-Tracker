
const Users = require("../model/usersModel")
 
   
   const handleAddUser = async (req, res)=>{


    const { fullName, Username, Password , Email} = req.body

    if(!fullName){
        return res.status(400).json({
            message: "Please kindly Enter your Full name"}) }

    if(!Email){
        return res.status(400).json({message: "Please kindly Enter your email"})}

    if(!Username){
        return res.status(400).json({message: "Please Enter your username"})}

    if(!Password){
     return res.status(400).json({message: "Please Enter your password"}) }


  const newUser = new Users({  fullName, Username, Password , Email})

  await newUser.save()

    return res.status(200).json({
        message: "User Created Successful"})
}


 



module.exports ={
    handleAddUser
}