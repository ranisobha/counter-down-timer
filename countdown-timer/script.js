const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours')
const minsE1 = document.getElementById('mins')
const secondsE1 = document.getElementById('seconds')

const newyears = "1 march 2022";
function countdown(){
    const newyeardate = new Date(newyears);
    const currentdate = new Date();
     // console.log(newyeardate - currentdate);
    const totalseconds = (newyeardate - currentdate) / 1000;

    const days = Math.floor(totalseconds /3600 / 24);


    const hours = Math.floor(totalseconds /3600) % 24;

    const mins = Math.floor(totalseconds / 60)  % 60;

    const seconds = Math.floor(totalseconds) % 60;
    console.log(days,hours,mins,seconds);

    daysE1.innerHTML = days;
    hoursE1.innerHTML = formattime(hours);
    minsE1.innerHTML=formattime(mins);
    secondsE1.innerHTML =formattime(seconds);
}

function formattime(time){
    return time < 10 ? (`0${time}`) : time;
}
countdown();

setInterval(countdown, 1000);