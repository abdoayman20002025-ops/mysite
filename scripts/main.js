document.addEventListener("DOMContentLoaded", function () {

    let points = 0;
    const pointsElement = document.getElementById("points");

    const cards = document.querySelectorAll(".company-card");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            points += 50;
            pointsElement.textContent = points;
        });
    });

});
