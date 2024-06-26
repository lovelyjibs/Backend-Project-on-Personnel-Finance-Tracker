
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
        message: "User Created Successful",
        user : newUser
    })
        

    }

    

const handleGetOneUser = async (req,res)=>{
     const { id } =req.params
     const user = await Users .findbyId(id)

    return res.status(200).json({
        message: "Get a single user Successful",
         user
        })

}

const handleUpdateUserPassword= async (req,res)=>{
    try{

       
        const {id } = req.params
        const {fullName, Username, Password , Email} = req.body
    
        const patchRequest = await Users.findByIdAndUpdate(
            id,
            {fullName, Username, Password , Email},
            {new : true}
        )
    
    
        return res.status(200).json({message: "Upate User Successful",
            user: updateUser
        })



    }catch(error) {
        
        return res.status(500).json({message: error.message})

    }
    

}

const handleDeleteRequest = async (req,res)=>{
    return res.status(200).json({message: "User Deleted Successfully"})

}

 
const handleGetAllUsers =async (req,res)=>{
    const users = await Users.find()
    return res.status(200).json({
    message:"successful",
    count: users.lenght,
    users
    })
 }
 



module.exports ={
    handleAddUser,
    handleGetOneUser,
    handleUpdateUserPassword,
    handleDeleteRequest,
    handleGetAllUsers

}