// dependencies
const express = require('express');
const path = require("path");
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// data
let reservations = [];

// routes
// =================================================
// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

// Create New Reservations - takes in JSON input
app.post("/api/reservations", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  

});


// open port
app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
});