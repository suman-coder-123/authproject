window.addEventListener("DOMContentLoaded", () => {
    const data = localStorage.getItem("accountdata");
    const userinfo = document.getElementById("userinfo");

    if (data) {
        const users = JSON.parse(data);

        if (users.length === 0) {
            userinfo.innerHTML = `<p>No users found. Please register first.</p>`;
            return;
        }

        let html = "<h2>All Registered Users:</h2>";

        users.forEach((user, index) => {
            html += `
            <div class="user-card">
                <h3>User ${index + 1}</h3>
                <p><strong>First Name:</strong> ${user.firstname}</p>
                <p><strong>Last Name:</strong> ${user.lastname}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Password:</strong> ${user.password}</p>
              
            `;
        });

        userinfo.innerHTML = html;
    } else {
        userinfo.innerHTML = `<p>No user data found. Please register first.</p>`;
    }
});
