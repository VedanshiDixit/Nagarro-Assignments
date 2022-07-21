require("dotenv").config(); 
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.listen(3000, () => console.log("Server is running"));

mongoose.connect(
    process.env.MONGODB_URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then((data) =>{
    console.log(`mongodb is connected with server: ${data.connection.host}`)
});

const studentSchema = new mongoose.Schema({
    roll_no: {
        type: Number,
        required: true
    },
    name: String,
    year: Number,
    subjects: [String]
});

const Student = mongoose.model('Student', studentSchema);
const stud = new Student({
    roll_no: 1001,
    name: 'Vedanshi Dixit',
    year: 3,
    subjects: ['DBMS', 'OS', 'Graph Theory', 'Internet Programming']
});
stud.save().then(() => console.log("One entry added"));

app.get('/', (req, res) => {
    Student.find({}, (err, found) => {
        if (!err) {
            res.send(found);
        }
        console.log(err);
        res.send("Some error occured!")
    })
});