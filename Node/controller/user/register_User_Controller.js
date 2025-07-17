
// register_User_Controller.js
const bcrypt = require('bcrypt');
const { User_Scema } = require('../../model/User_Schema');

const register_User_Controller = async (req, res) => {
    try {

        const { email, name, password } = req.body;

        if (!email || !password || !name) {
            console.log(`All the inputs are mandatory...`.bgRed);

            return res.status(404).json({
                success: false,
                message: `All the inputs are mandatory...`,
            });
        }

        const isUserExist = await User_Scema.findOne({ email });

        if (isUserExist) {
            console.log(`User aleady exist...`.bgRed);

            return res.status(404).json({
                success: false,
                message: `User aleady exist...`,
            });
        }

        const hashPass = await bcrypt.hash(password, 10);

        const newUser = await User_Scema.create({
            name: name,
            email: email,
            password: hashPass,
        });

        console.log(`New User created sccessfully...`.bgYellow);

        res.status(200).json({
            success: true,
            message: `New User created sccessfully...`,
            newAdmin: {
                "Name ": name,
                "Email ": email,
                "Password ": hashPass,
            },
        });

        
    } catch (error) {
        
        console.log(`Error in register_User_Controller : ${error.message}`.bgRed);
        
        res.status(500).json({
            success: false,
            message: `Error in register_User_Controller : ${error.message}`,
        });
    }
}

exports.register_User_Controller = register_User_Controller;



