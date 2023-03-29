const days =document.getElementById('days');
const hour =document.getElementById('hours');
const minute = document.getElementById('minutes');
const second = document.getElementById('seconds')

let secValue = 60;
let minValue = 60;
let hourValue = 24;
let dayValue = 9;

const setTime = setInterval(() =>{
    secValue--;
    if(secValue === 0) {
        minValue--;
        secValue = 60;
    }
    if(minValue === 0){
        hourValue--;
        minValue = 60;
    }
    if(hourValue === 0) {
        days--;
        hourValue=24;
    }
    if (dayValue === 0) {
        clearInterval(setTime);
        second.textContent = 00;
        minute.textContent = 00;
        hour.textContent = 00;
        days.textContent = 00;
    }
    
    second.textContent = secValue;
    minute.textContent = minValue;
    hour.textContent = hourValue;
    days.textContent = dayValue

},1000);


