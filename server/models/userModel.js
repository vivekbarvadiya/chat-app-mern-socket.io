const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    },
    pic:{
        type: String,
        default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);