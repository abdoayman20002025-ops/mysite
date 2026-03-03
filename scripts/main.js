document.addEventListener("DOMContentLoaded", function () {

    let points = localStorage.getItem("points") 
        ? parseInt(localStorage.getItem("points")) 
        : 0;

    const pointsElement = document.getElementById("points");
    pointsElement.textContent = points;

    const buttons = document.querySelectorAll(".company-card");

    buttons.forEach(card => {
        card.addEventListener("click", function () {
            points += 50;
            pointsElement.textContent = points;
            localStorage.setItem("points", points);
        });
    });

});
