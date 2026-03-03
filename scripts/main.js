let points = localStorage.getItem("points") 
    ? parseInt(localStorage.getItem("points")) 
    : 0;

let completedOffers = localStorage.getItem("completedOffers") 
    ? JSON.parse(localStorage.getItem("completedOffers")) 
    : [];

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("points").innerText = points;
});
function animatePoints(target){
    let current = parseInt(document.getElementById("points").innerText);
    let increment = target > current ? 1 : -1;

    let interval = setInterval(function(){
        current += increment;
        document.getElementById("points").innerText = current;

        if(current == target){
            clearInterval(interval);
        }
    }, 5);
}
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
function withdraw(){

    if(points < 1000){
        alert("لازم تجمع 1000 نقطة على الأقل علشان تسحب 💰");
        return;
    }

    points -= 1000;

    localStorage.setItem("points", points);
    document.getElementById("points").innerText = points;

    alert("تم إرسال طلب السحب بنجاح ✅");
}
