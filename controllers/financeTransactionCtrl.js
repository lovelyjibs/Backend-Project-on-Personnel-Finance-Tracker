 
 
 const Transactions = require("../model/transactionsModels")

 const financeTrackerTransaction ={
    category: "",
    description: "",
    type:   ""
   


 }
 
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



const handleGetAllTransactions= async (req,res)=>{

   const transaction = await Transactions.find()
   return res.status(200).json({
      message:"successful",
       count: transactions.lenght,
       transactions
})
}

 //const handleRequestForOneTransaction = async(req,res)=>{
   //const { id }=req.params
   //const transaction=await Transactions.findById(id)
   //return res.status(200).json({
      //message:"successful",
      //transaction
   
   //})


const handleTransactionPatchRequest = async (req,res)=>{
   
   return res.status(200).json({message: "Update a specific transaction for a user"})
}

const handleTransactionDeleteRequest = async (req,res)=>{
   return res.status(200).json({message: "Successful delete a specific transaction for a user"})
}





module.exports = {
    handleAddTransaction,
    handleGetAllTransactions,
    handleTransactionPatchRequest,
    handleTransactionDeleteRequest
   

   
 
    
}

