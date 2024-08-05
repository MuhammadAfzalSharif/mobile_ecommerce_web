let le = document.querySelector(".email");
let lp = document.querySelector(".password");
let l = document.querySelector(".login");

// Retrieve data from local storage
let array_obj = JSON.parse(localStorage.getItem("sinup")) || [];


l.addEventListener("click", (event) => {
  event.preventDefault();
  

    let userFound = array_obj.find(user => user.email === le.value && user.password === lp.value);
    if (userFound) {
      window.location.href = "index.htm";
      alert("Login successful");
    } 
    
    else {
      window.location.href = "signup.htm";
    alert("You don't have an account! Now create an account");
    }
  
});
