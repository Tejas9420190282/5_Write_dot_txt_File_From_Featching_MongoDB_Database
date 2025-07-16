const { default: mongoose } = require("mongoose");

const connectDB = async () => {
    try {
        
        await mongoose.connect('mongodb://127.0.0.1:27017/read_File')
  
        console.log(`Database conneced successfully`.bgGreen);   

    } catch (error) {
        
        console.log(`Error in DB connection : ${error.message}`.bgRed);
    }
}

exports.connectDB = connectDB;