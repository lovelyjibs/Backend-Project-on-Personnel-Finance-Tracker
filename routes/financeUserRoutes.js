const express = require("express")
const { handleAddUser, handleGetRequest, handlePatchRequest, handleDeleteRequest } = require("../controllers/financeUserCtrl")

const router = express. Router()

router.post("/add-user",handleAddUser )
router.get("/users/:id",handleGetRequest)
router.patch("/users/:id",handlePatchRequest)
router .delete("/users/:id",handleDeleteRequest)



module.exports = router

