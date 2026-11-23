
// ABHISHEK GAMING

console.log("Welcome to Abhishek Gaming!");

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        alert("Welcome to " + card.querySelector("h3").textContent);
    });
});


