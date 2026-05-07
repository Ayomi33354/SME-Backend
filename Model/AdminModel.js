const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema({
    Name : {
        type: String, 
        required: true
    },
    email:{
        type:String,
        unique: true,
        required:true
    },
    password: {
        type: String,
        select : false,
        required: true
    }
})

const AdminModel = mongoose.model("Admin",  AdminSchema)
module.exports = AdminModel