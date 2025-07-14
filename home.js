const togglebtn = document.getElementById("theme-toggle");

togglebtn.addEventListener("click", () => {
    document.body.classList.toggle("Light-mode");

    if (document.body.classList.contains("Light-mode")) {
        togglebtn.textContent="Dark Mode";
    } else {
        togglebtn.textContent="Light Mode"
    }
});