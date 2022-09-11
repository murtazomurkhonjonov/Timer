/*
const data = new Date()
const month = data.getMonth()
const day = data.getDate() < 10 ? "0" + data.getDate() : data.getDate();
const year = data.getFullYear();
const hour = data.getHours() < 10 ? "0" + data.getHours() : data.getHours();
const minute  = data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes();
const secund = data.getSeconds() < 10 ? "0" + data.getSeconds() : data.getSeconds();



document.querySelector("#secund").innerHTML = secund

let minuteHTML = document.querySelector(".minute").innerHTML = minute;
let hourHTML = document.querySelector(".hours").innerHTML = hour
let dayHTML = document.querySelector(".day").innerHTML = day
let monthHTML = document.querySelector(".month").innerHTML = months[month]

let yearHTML = document.querySelector(".year").innerHTML = year
setInterval(secund, 1000)*/

setInterval(myTimerHour, 1000);
setInterval(myMinute, 1000);
setInterval(myHour, 1000);
setInterval(myMonth, 1000)
setInterval(myDay, 1000)
setInterval(myYear, 1000)
const months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentyabr",
    "Oktyabr",
    "Noyabr",
    "Dekabr"
];

function myTimerHour() {
     const data = new Date();
     let x = data.getSeconds() < 10 ? "0" + data.getSeconds() : data.getSeconds()
     document.querySelector("#secund").innerHTML = x
};
function myMinute() {
    const data = new Date();
    let x = data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes();
    document.querySelector(".minute").innerHTML = x;

};
function myHour() {
    const data  = new Date();
    let x = data.getHours() < 10 ? "0" + data.getHours() : data.getHours()
    document.querySelector(".hours").innerHTML = x;
};
function myDay() {
    const data = new Date();
    let x = data.getDate();
    document.querySelector(".day").innerHTML = x;
}
function myMonth() {
    const data = new Date();
    let x = data.getMonth()
    document.querySelector(".month").innerHTML = months[x]
}
function myYear() {
    const data = new Date();
    let x = data.getFullYear();
    document.querySelector(".year").innerHTML = x;
}