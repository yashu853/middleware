const express = require("express");

const app = express();

// Custom middleware to add req.user
app.use((req, res, next) => {
  req.user = "Guest";
  next();
});

// Route using the middleware
app.get("/welcome", (req, res) => {
  res.send(`<h1>Welcome ${req.user}</h1>`);
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running");
});
