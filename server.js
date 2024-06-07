
const express = require("express")
const dotenv = require("dotenv").config()
const mongoose = require("mongoose")
const routes  = require("./routes/financeUserRoutes")

const app = express()

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

app.use("/api", routes)
