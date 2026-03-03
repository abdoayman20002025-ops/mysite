let points = localStorage.getItem("points") 
    ? parseInt(localStorage.getItem("points")) 
    : 0;

let completedOffers = localStorage.getItem("completedOffers") 
    ? JSON.parse(localStorage.getItem("completedOffers")) 
    : [];

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("points").innerText = points;
});

function earn(company){

    if(completedOffers.includes(company)){
        alert("أنت أخدت نقاط الشركة دي قبل كده 😉");
        return;
    }

    points += 50;
    completedOffers.push(company);

    localStorage.setItem("points", points);
    localStorage.setItem("completedOffers", JSON.stringify(completedOffers));

    document.getElementById("points").innerText = points;
}

function show(id){
    document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}
