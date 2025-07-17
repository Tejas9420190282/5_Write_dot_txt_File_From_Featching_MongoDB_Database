
// register_User_Router.js

const express = require('express');
const { register_User_Controller } = require('../../controller/user/register_User_Controller');

const register_User_Router = express.Router();

register_User_Router.post('/register-user', register_User_Controller);

exports.register_User_Router = register_User_Router;