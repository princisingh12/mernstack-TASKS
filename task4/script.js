const container = document.getElementById("userContainer");

fetch("https://dummyjson.com/users")
.then(response => response.json())
.then(data => {

    data.users.forEach(user => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${user.image}" alt="">
            <h3>${user.firstName} ${user.lastName}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Age:</strong> ${user.age}</p>
            <p><strong>Gender:</strong> ${user.gender}</p>
        `;

        container.appendChild(card);
    });

})
.catch(error => {
    console.log(error);
});