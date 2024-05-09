var daysItem = document.querySelector("#days");
var hoursItem = document.querySelector("#hours");
var minItem = document.querySelector("#min");
var secItem = document.querySelector("#sec");
var monthsItem = document.querySelector("#months");

function countDown(){
    var firstRamzan = new Date("17 jun 2024");
    var currentDate = new Date();
    var myDate = firstRamzan - currentDate;
    var days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    var hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    var min = Math.floor(myDate / 1000 / 60 ) % 60;
    var sec = Math.floor(myDate / 1000) % 60;
    
    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;

}
countDown();
setInterval(countDown, 1000)