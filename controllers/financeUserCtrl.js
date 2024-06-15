
const Users = require("../model/usersModel")


const financetracker=[
    
  {
    fullName: "Joseph Mary",
    Email:  "waramisco@gmail.com",
    Username: "lovelyjibs1",
    Password: "G123456"
  },
     {
        fullName: "Mary Jay",
        Email: "Example@gmail.com",
        Username: "maryjoo2",
        Password: "D123456"
     }

]
 
   
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

const handleGetRequest = async (req,res)=>{
    return res.status(200).json({message: "Get a single user Successful"})

}

const handlePatchRequest= async (req,res)=>{
    return res.status(200).json({message: "Upate User Successful"})

}

const handleDeleteRequest = async (req,res)=>{
    return res.status(200).json({message: "User Deleted Successfully"})

}
 



module.exports ={
    handleAddUser,
    handleGetRequest,
    handlePatchRequest,
    handleDeleteRequest

}