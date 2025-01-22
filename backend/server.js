const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const  task= require("./routes/task");

const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/task";


app.use(cors()); 
app.use(express.json()); 
app.use("/",task);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); 
  });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
