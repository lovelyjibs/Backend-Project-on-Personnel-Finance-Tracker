
const express = require("express")
const dotenv = require("dotenv").config()
const mongoose = require("mongoose")
const routes  = require("./routes/financeUserRoutes")
const transactionRouter =require("./routes/financeTransactionRoutes")


const app = express()

app.use (express.json())

const PORT = process.env.PORT||8000

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("mongodb connected");
})
.catch((error)=>{
    console.log("error");
})

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
})

app.get("/",(req, res)=>{
    return res.status(200).json({message:"welcome to Jigbale Itse Project"})

})

 app.get("/Users")
 
 app.get("/get-user", (req,res)=>{
    return res.status(200).json({message:"successful"})
 })

app

app

app

app.use("/api", routes)






app.use("/api",  transactionRouter)

app

app.get("/transaction/:transaction Id",(req,res)=>{
    return res.status(200).json({message: "Get a specific transactions for a user"})
})

app

app
