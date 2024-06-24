const express = require("express")
const { handleAddTransaction,handleTransactionPatchRequest, handleTransactionDeleteRequest,handleGetOneTransaction, handleGetAllTransactions } = require("../controllers/financeTransactionCtrl")

const transactionRouter = express.Router()

transactionRouter .post("/add-transaction", handleAddTransaction)
transactionRouter .get("/all-transactions",handleGetAllTransactions)
transactionRouter .patch("/transcation/:transcation Id",handleTransactionPatchRequest)
transactionRouter .delete("/transaction/:transaction Id",handleTransactionDeleteRequest)
transactionRouter .get("/one-transaction",)









module.exports = transactionRouter