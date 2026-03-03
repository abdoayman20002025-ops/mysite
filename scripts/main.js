let points = localStorage.getItem("points") 
    ? parseInt(localStorage.getItem("points")) 
    : 0;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("points").innerText = points;
});

function earn(){
    points += 50;
    localStorage.setItem("points", points);
    document.getElementById("points").innerText = points;
}

function show(id){
    document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}
