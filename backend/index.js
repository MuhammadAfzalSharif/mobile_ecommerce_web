 const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000; // You can use 3000 or 8080 for a local server
let current_orders=[]

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Creating server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/added", (req, res) => {
  res.render("item-added.ejs");
});

app.post("/placed", (req, res) => {
    current_orders.push(req.body) // orders that are in pending
  res.send("Your order is received");
  console.log(req.body);


});





