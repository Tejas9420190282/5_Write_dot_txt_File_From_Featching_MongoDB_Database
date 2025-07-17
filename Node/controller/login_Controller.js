
// login_Controller.js

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User_Scema } = require('../model/User_Schema');
const { Admin_Scema } = require('../model/Admin_Schema');


const login_Controller = async (req, res) => {

    const SECRET_KEY = 'secret-key';

    try {
        const { email, password } = req.body;

        if (!email || !password ) {
            console.log(`All the inputs are mandatory...`.bgRed);

            return res.status(404).json({
                success: false,
                message: `All the inputs are mandatory...`,
            });
        }

        // check is it User
        const isUser = await User_Scema.findOne({ email });

        if (isUser) {
            
            console.log(`user's password : ${isUser.password}`);
            
            const isMatch = await bcrypt.compare(password, isUser.password);

            if (!isMatch) {
                
                console.log(`Incorrect password`.bgRed);

                return res.status(500).json({
                    success: false,
                    message: `Incorrect password`,
                });
            }

            const token = await jwt.sign({email : isUser.email}, SECRET_KEY, {expiresIn: '1h'});

            console.log(`User successfully logged in....`.bgYellow);
            
            return res.status(200).json({
                success: true,
                message: `User successfully logged in....`,
                User : {
                    Name : isUser.name,
                    Email : isUser.email 
                }
            });
        }

        // check is it Admin
        const isAdmin = await Admin_Scema.findOne({email})

        if (isAdmin) {

            console.log(`Admin's password : ${isAdmin.password}`);
            
            
            const isMatch = await bcrypt.compare(password, isAdmin.password);

            if (!isMatch) {
                
                console.log(`Incorrect password`.bgRed);

                return res.status(500).json({
                    success: false,
                    message: `Incorrect password`,
                });
            }

            const token = await jwt.sign({email : isAdmin.email}, SECRET_KEY, {expiresIn: '1h'});

            console.log(`Admin successfully logged in....`.bgYellow);

            return res.status(200).json({
                success: true,
                message: `Admin successfully logged in....`,
                Admin_Details : {
                    Name : isAdmin.name,
                    email : isAdmin.email
                }
            });
            
        }

        // If neither user nor admin found
        console.log(`No account found with this email...`.bgRed);
        return res.status(404).json({
            success: false,
            message: `No account found with this email...`
        });

        
    } catch (error) {
        
        console.log(`Error in login_Controller : ${error.message}`.bgRed);
        
        res.status(500).json({
            success: false,
            message: `Error in login_Controller : ${error.message}`,
        });
    }
}

exports.login_Controller = login_Controller; 

