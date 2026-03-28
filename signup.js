let button = document.getElementById("sub");

let first=document.getElementById("first")
let second=document.getElementById("second")

let box = document.getElementsByClassName("container")
let div = document.getElementsByClassName("card")
let div1 = document.getElementsByClassName("card1")
let div2 = document.getElementsByClassName("card2")

button.addEventListener("click", function () {
  let user = document.getElementById("username").value;

  if (user === "") {
    alert("Enter name");
  } else {
    localStorage.setItem("user", user);
    window.location.href = "practice.html";
  }
});

first.addEventListener("click" , ()=>{
  div.style.display="none";
  div1.style.display="block"
})