const express = require("express")
const { handleAddUser, handleGetRequest, handlePatchRequest, handleDeleteRequest, handleGetUserRequest, handleEditedUserRequest } = require("../controllers/financeUserCtrl")

const router = express. Router()

router.post("/add-user",handleAddUser )
router.get("/users/:id",handleGetRequest)
router.put("/edit-users/:id",handleEditedUserRequest)
router .delete("/users/:id",handleDeleteRequest)
router .get("/get-user", handleGetUserRequest)



module.exports = router

