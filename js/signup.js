class Info {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

let sp = document.querySelector(".password2");
let signup = document.querySelector(".signup");
let se = document.querySelector(".email2");


let array_obj = JSON.parse(localStorage.getItem('sinup')) || [];

signup.addEventListener("click", (event) => {


  event.preventDefault();
  console.log("signup");

  let obj = new Info(se.value, sp.value);
  array_obj.push(obj);
  console.log("Account created");
localStorage.setItem("sinup", JSON.stringify(array_obj));


  window.location.href="login.htm"
});
