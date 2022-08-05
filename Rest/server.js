const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./db/Database")

// handlisng uncaught exception
process.on("uncaughtException",(err) =>{
    console.log(`Error : ${err.message}`);
    console.log("Sutting down the server for handling uncaught exception");
});

// config
dotenv.config({
    path:"./config/.env"
});


// connect database
connectDatabase();

// create server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
});