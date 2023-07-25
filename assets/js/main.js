const firstBtn = document.querySelector(".btn1");
const secndBtn = document.querySelector(".btn2");
const thirdBtn = document.querySelector(".btn3");
const fourtBtn = document.querySelector(".btn4");
const otherSide = document.querySelector(".form");
const login = document.querySelector(".login");
const register = document.querySelector(".register");
const info = document.querySelector(".info");
const thanks = document.querySelector(".thanks");

const container = document.querySelector(".container");
const bg1 = document.querySelector(".bg1");
const bg2 = document.querySelector(".bg2");



var doing = function() {
    otherSide.classList.toggle("otherside");
    login.classList.toggle("goodbye");
    register.classList.toggle("hello");
}

var done = function() {
    info.classList.add("goodbye2");
    otherSide.classList.add("center2");
    register.classList.remove("hello");
    login.classList.add("goodbye");
    thanks.classList.add("end");
    container.classList.add("reduce1");
    bg1.classList.add("reduce2");
    bg2.classList.add("reduce2");
}

firstBtn.addEventListener("click", doing);
secndBtn.addEventListener("click", doing);
thirdBtn.addEventListener("click", done);
fourtBtn.addEventListener("click", done);