document.getElementById("createaccount").addEventListener("submit" , function(event) {
    event.preventDefault();
const firstname = document.getElementById("firstname").value;
const lastname = document.getElementById("lastname").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;


const accountdata = {
    firstname :firstname,
    lastname :lastname,
    email :email,
    password :password ,
} 

const storedData = JSON.parse(localStorage.getItem('accountdata'))||[];

storedData.push(accountdata);

localStorage.setItem('accountdata' , JSON.stringify(storedData));

    alert("Account created successfully!");

window.location.href="login.html";


});
