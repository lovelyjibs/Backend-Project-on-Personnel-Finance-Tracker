const express = require("express")
const { handleAddTransaction } = require("../controllers/financeTransactionCtrl")

const transactionRouter = express.Router()

transactionRouter .post("/add-transaction", handleAddTransaction)

module.exports = transactionRouter