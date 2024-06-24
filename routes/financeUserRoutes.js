const express = require("express")
const { handleAddUser,handleDeleteRequest,handleUpdateUserPassword, handleGetOneUser, handleGetAllUsers } = require("../controllers/financeUserCtrl")

const router = express. Router()

router.post("/add-user",handleAddUser )
router.get("/one-user/:id",handleGetOneUser)
router.patch("/users-password/:id",handleUpdateUserPassword)
router .delete("/users/:id",handleDeleteRequest)
router .get("/all-users", handleGetAllUsers)



module.exports = router

