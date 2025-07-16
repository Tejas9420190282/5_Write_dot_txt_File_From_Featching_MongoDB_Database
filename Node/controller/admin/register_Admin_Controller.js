// register_Admin_Controller.js

const { admin_Scema } = require("../../model/Admin_Schema");
const bcrypt = require("bcrypt");

const register_Admin_Controller = async (req, res) => {
    try {
        const { email, name, password } = req.body;

        if (!email || !password || !name) {
            console.log(`All the inputs are mandatory...`.bgRed);

            res.status(404).json({
                success: false,
                message: `All the inputs are mandatory...`,
            });
        }

        const isAdminExist = await admin_Scema.findOne({ email });

        if (isAdminExist) {
            console.log(`Admin aleady exist...`.bgRed);

            res.status(404).json({
                success: false,
                message: `Admin aleady exist...`,
            });
        }

        const hashPass = await bcrypt.hash(password, 10);

        const newAdmin = await admin_Scema.create({
            name: name,
            email: email,
            password: hashPass,
        });

        console.log(`New Admin created sccessfully...`.bgYellow);

        res.status(200).json({
            success: true,
            message: `New Admin created sccessfully...`,
            newAdmin: {
                "Name ": name,
                "Email ": email,
                Password: hashPass,
            },
        });
    } catch (error) {
        console.log(
            `Error in register_Admin_Controller : ${error.message}`.bgRed
        );

        res.status(500).json({
            success: false,
            message: `Error in register_Admin_Controller : ${error.message}`,
        });
    }
};

exports.register_Admin_Controller = register_Admin_Controller;
