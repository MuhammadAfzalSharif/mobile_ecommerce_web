

// localStorage 

placeorder.addEventListener("click",(event)=>
{
    localStorage.clear()
    let order = JSON.parse(localStorage.getItem('order')) || [];

    order.push(a1,a2,a3,totalAmountInput.value); //a1 to a3 are array 
    localStorage.setItem('order', JSON.stringify(order));
    
    
    
    
})



let order = JSON.parse(localStorage.getItem('order')) || [];



//! post request

let localStorageData = JSON.parse(localStorage.getItem("order")) || [];

//~  front end 
//* const order = {
//*   name,
//*   email,
//*   address,
//*   date,
//*   localStorageData
//* };

//* axios.post("http://localhost:3000/placed", order)
//*   .then((response) => {
//*     console.log(response.data); // Handle the response data
//*   })
//*   .catch((error) => {
//*     console.error("Error:", error); // Handle any errors
//*   });

//*   alert("Your Order has been placed");
//* }


//! backend 

//* const express = require('express');
//* const cors = require('cors'); //this is use to remove some privacy its npm stall in where this file is place
//* const app = express();
//* const port = 3000; // You can use 3000 or 8080 for a local server

// //~ Middleware to parse JSON bodies
//* app.use(express.json());

// //~ Enable CORS for all routes
//* app.use(cors());

// //~ Creating server
//* app.listen(port, () => {
//*   console.log(`Server is running on http://localhost:${port}`);
//* });

//* app.get("/", (req, res) => {
//*   res.send("hello");
//* });

//* app.get("/added", (req, res) => {
//*   res.send("Item added");
//* });

//* app.post("/placed", (req, res) => {
//*   console.log("Received data:", req.body); //receiving object
//*   res.send("Post request received");
//* });
