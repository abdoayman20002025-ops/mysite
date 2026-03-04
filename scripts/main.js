function animatePoints(target){
let current = parseInt(document.getElementById("points").innerText) || 0;

let increment = target > current ? 1 : -1;

let interval = setInterval(function(){

current += increment;

document.getElementById("points").innerText = current;

if(current == target){
clearInterval(interval);
}

}, 5);
}
let points = localStorage.getItem("points") 
    ? parseInt(localStorage.getItem("points")) 
    : 0;

let completedOffers = localStorage.getItem("completedOffers") 
    ? JSON.parse(localStorage.getItem("completedOffers")) 
    : [];

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("points").innerText = points;

    if(localStorage.getItem("loggedIn") === "true"){
        show("home");
    }
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

    animatePoints(points);
}

function show(id){

    if(id === "home" && localStorage.getItem("loggedIn") !== "true"){
        alert("لازم تسجل دخول الأول");
        id = "account";
    }

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
function register(){
  let username = document.getElementById("regUser").value;
  let password = document.getElementById("regPass").value;

  if(username === "" || password === ""){
    alert("اكتب البيانات كاملة");
    return;
  }

  localStorage.setItem("user", username);
  localStorage.setItem("pass", password);

  alert("تم إنشاء الحساب بنجاح ✅");
}
function login(){
  let username = document.querySelector("#account input[placeholder='اسم المستخدم']").value;
  let password = document.querySelector("#account input[placeholder='كلمة المرور']").value;

  let savedUser = localStorage.getItem("user");
  let savedPass = localStorage.getItem("pass");

  if(username === savedUser && password === savedPass){
    alert("تم تسجيل الدخول بنجاح ✅");
    localStorage.setItem("loggedIn","true");
    show("home");
  } else {
    alert("بيانات غير صحيحة ❌");
  }
}
function logout(){
    localStorage.removeItem("loggedIn");
    show("account");
}
