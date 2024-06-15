const express = require("express")
const { handleAddTransaction, handleTransactionGetRequest, handleTransactionPatchRequest, handleTransactionDeleteRequest } = require("../controllers/financeTransactionCtrl")

const transactionRouter = express.Router()

transactionRouter .post("/add-transaction", handleAddTransaction)
transactionRouter .get("/transactions/:transactions Id",handleTransactionGetRequest)
transactionRouter .patch("/transcation/:transcation Id",handleTransactionPatchRequest)
transactionRouter .delete("/transaction/:transaction Id",handleTransactionDeleteRequest)









module.exports = transactionRouter