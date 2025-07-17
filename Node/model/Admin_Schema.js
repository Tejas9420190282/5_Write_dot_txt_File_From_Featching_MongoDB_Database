
// Admin_Schema.js

const { default: mongoose } = require("mongoose");

const admin_Schema = new mongoose.Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
        required : [true, `Email is mandatory`],
        unique : true,
        match : [/^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please fill the valid address"],
    },
    password : {
        type : String,
        required : [true, "Password is mandatory"],
    }
}, {
    timestamps : true
})


const Admin_Scema = mongoose.model('Admin_Schema', admin_Schema);


exports.Admin_Scema = Admin_Scema;

