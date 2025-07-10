document.getElementById("login").addEventListener("submit" , function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password= document.getElementById("password").value;

    let logindata = JSON.parse(localStorage.getItem('accountdata')) || [];
    let found = logindata.find(item=> 
        item.email===email&&
        item.password===password
    );

    if (found){
        window.location.href="landing.html";
    } else {
        alert("Invalid Information ");
    }
    this.reset();

});