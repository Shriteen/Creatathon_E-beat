import express from 'express'
import mongoose from 'mongoose';
const app = express();

const PORT = 1300;

const CONNECTION_URL = "mongodb+srv://test:test@cluster0.wmpaxgm.mongodb.net/?retryWrites=true&w=majority"; 



//code to connect to the mongo db
mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((error) => {
    console.log("Couldn't connect");
    console.log(error);
  });

app.listen(PORT, () => {
    console.log("Server started on 1300");
  });