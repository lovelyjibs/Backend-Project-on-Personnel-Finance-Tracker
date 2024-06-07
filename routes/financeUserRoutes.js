const express = require("express")
const { handleAddUser } = require("../controllers/financeUserCtrl")

const router = express. Router()

router.post("/add-user",handleAddUser )


module.exports = router

