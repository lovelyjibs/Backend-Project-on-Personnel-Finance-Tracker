 
 
 const Transactions = require("../model/transactionsModels")
 
 const handleAddTransaction= async (req,res)=>{

 const { category, type,  description }= req.body

 if(!category){
  return res.status(400).json({message: "Please select the category"})
 }

 if(!description){
    return res.status(400).json({message: "Please select the description needed"})

 }

 if(!type){
    return res.status(400).json({message: "Please select the type"})
 }

const newTransaction =new Transactions({category, type, description })

await newTransaction.save()

 

    return res.status(200).json({message: "Transaction Completed"})
}


module.exports = {
    handleAddTransaction
}

