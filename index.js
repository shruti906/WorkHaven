const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;
const routes = require('./routes/routes');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.set("view engine", "ejs");

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the project directory
app.use(express.static(__dirname));
app.use(express.static('./assets'));
app.use(express.static('./scripts'));

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/workhaven", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Schema and Model
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);

// Routes
app.use('/', routes);

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(200).json({ success: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
