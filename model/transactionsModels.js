

const mongoose = require("mongoose")

const transactionSchema = new mongoose.Schema({

    category: {
        type: String, require
    },

    type:{
      type: String, require
    },

    description:{
        type: String, require
    },

    amount: {
        type : String,default :0
    },
    

   },
{timestamps: true})

const Transactions = new mongoose.model("Transactions",transactionSchema )

module.exports = Transactions