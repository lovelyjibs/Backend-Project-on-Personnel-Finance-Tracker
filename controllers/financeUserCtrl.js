

   const handleAddUser = (req, res)=>{
    return res.status(200).json({message: "User Created Successful"})
}

module.exports ={
    handleAddUser
}