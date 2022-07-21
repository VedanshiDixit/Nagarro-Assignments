import dotenv from "dotenv";
dotenv.config();
import fetch from "node-fetch";
import mongoose from "mongoose";
const url = "https://icanhazdadjoke.com/slack";

// create databse connection
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => {
    console.log(`mongodb is connected with server: ${data.connection.host}`);
  });

// create schema for database
const jokeapiSchema = new mongoose.Schema({
  attachments: [
    {
      text: String,
    },
  ],
  response_type: String,
  username: String,
});

const Jokesdata = mongoose.model("Jokesdata", jokeapiSchema);

// fetch data from api and save in databse
async function getJokes() {
  const joke = await fetch(url);
  const response = await joke.json();
  const jokedata = new Jokesdata({
    attachments: [
      {
        text: response.attachments[0].fallback,
      },
    ],
    response_type: response.response_type,
    username: response.username,
  });
  jokedata.save().then(() => console.log("One entry added"));
}

getJokes();
