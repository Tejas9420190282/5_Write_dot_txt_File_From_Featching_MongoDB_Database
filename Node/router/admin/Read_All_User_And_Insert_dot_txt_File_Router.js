
// Read_All_User_And_Insert_dot_txt_File_Router.js

const express = require('express');
const { Read_All_User_And_Insert_dot_txt_File_Controller } = require('../../controller/admin/Read_All_User_And_Insert_dot_txt_File_Controller');

const Read_All_User_And_Insert_dot_txt_File_Router = express.Router();

Read_All_User_And_Insert_dot_txt_File_Router.get("/get-all-users-and-insert-in-dot-txt-file", Read_All_User_And_Insert_dot_txt_File_Controller);

exports.Read_All_User_And_Insert_dot_txt_File_Router = Read_All_User_And_Insert_dot_txt_File_Router;