
// Read_All_User_And_Insert_dot_txt_File_Controller.js

const path = require("path");
const { User_Scema } = require("../../model/User_Schema");
const fs = require('fs');

const Read_All_User_And_Insert_dot_txt_File_Controller = async (req, res) => {
    try {

        const allUser = await User_Scema.find();

        const users = allUser.map((user, index) => {
            return `id :${index+1}, Name : ${user.name}, Email : ${user.email}, createdAt : ${user.createdAt}`      

        })

        // ✅ Convert array to string (with line breaks)
        const userText = users.join("\n");

        const filePath = path.join(__dirname, "../../allUsers.txt");

        // ✅ Use proper file path
        fs.writeFileSync(filePath, userText, "utf8");

        console.log(`All users fetched & inserted into .txt successfully...`.bgYellow);

        
        res.status(200).json({
            success : true,
            message : `All users featch successfully...`,
            allUser : users
        })
        
    } catch (error) {
        
        console.log(`Error in Read_All_User_And_Insert_dot_txt_File_Controller : ${error.message}`.bgRed);
        
        res.status(500).json({
            success: false,
            message: `Error in Read_All_User_And_Insert_dot_txt_File_Controller : ${error.message}`,
        });
    }
}

exports.Read_All_User_And_Insert_dot_txt_File_Controller = Read_All_User_And_Insert_dot_txt_File_Controller;


