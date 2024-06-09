
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    
    fullName:{
            type: String, required: true},
    
    
    Username:{
         type: String, required: true
    },

    Password:{
        type: String, required: true
   },

   Email:{
    type: String, required: true
}

})

const Users = new mongoose.model("Users", userSchema)

module.exports = Users

