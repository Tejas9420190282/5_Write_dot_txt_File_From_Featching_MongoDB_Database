const express = require("express");
const {
    register_Admin_Controller,
} = require("../../controller/admin/register_Admin_Controller");

const register_Admin_Router = express.Router();

register_Admin_Router.post("/register-admin", register_Admin_Controller);

exports.register_Admin_Router = register_Admin_Router;
