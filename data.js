fetch("https://jsonplaceholder.typicode.com/users")
.then (response => response.json())
.then (users=> {
    const usersDiv = document.getElementById("users");

    users.forEach(user=> {
        const userCard = document.createElement("div");
        userCard.className="user-card";

        userCard.innerHTML = `
        <h3> ${user.name} (${user.username})</h3>
        <p><strong>Email:</strong>${user.email}</p>
        <p><strong>Phone.no:</strong>${user.phone}</p>
        <p><strong>Website:</strong>${user.website}</p>
        <p><strong>Company:</strong>${user.company}</p>
        <p><strong>Address:</strong>${user.address.street},${user.address.city},${user.address.zipcode}</p>
        `;

        usersDiv.appendChild(userCard);
    });
})
.catch (error => {
    console.error("error fetching user:" , error);
});
