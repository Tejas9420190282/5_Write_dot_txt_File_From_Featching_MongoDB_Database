
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
        /*  join ========>  - join() is a built-in JavaScript method for arrays.

                            - It takes all items in an array and joins them together into one string.

                            - "\n" means new line (like pressing Enter on your keyboard). 
        */

        const filePath = path.join(__dirname, "../../allUsers.txt");
        /*  path.join ======>   - path is a built-in Node.js module.

                                - path.join() is used to build safe file paths across all systems (Windows, Linux, etc.).

                                - '__dirname' gives you the current folder path of your file.

                            🔍 Breakdown:
                                -  __dirname = "C:/Users/Tejas/Desktop/Project/controllers"
                            
                                - path.join(__dirname, "../../allUser.txt")
                                
                                - This joins the path safely:

                            C:/Users/Tejas/Desktop/Project/controllers + ../../allUser.txt 
                            = C:/Users/Tejas/Desktop/Project/allUser.txt       
        */


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


