const days =document.getElementById('days');
const hour = document.getElementById('hours');
const minute = document.getElementById('minutes');
const second = document.getElementById('seconds')

const newYearTime = new Date("Mar 31 2027 00:00:00")

const setTime = () => {
    const currentTime = new Date();
    const timeRemaining = newYearTime - currentTime;

    const d = Math.floor(timeRemaining /1000 / 60 / 60/ 24);
    const h = Math.floor(timeRemaining /1000 / 60 / 60) % 24;
    const m = Math.floor(timeRemaining /1000 / 60 )% 60;
    const s = Math.floor(timeRemaining /1000) % 60;

    days.textContent = d;
    hour.textContent = h < 10 ? '0' + h : h;
    minute.textContent = m < 10 ? '0' + m :m;
    second.textContent = s <10 ? '0' +s :s;

    if(timeRemaining  < 0){
        clearInterval(setTime);
        days.textContent = '0' + '0';
        hour.textContent = '0' + '0';
        minute.textContent = '0' + '0';
        second.textContent = '0' + '0';
    }

};
setTime();

setInterval(setTime,1000);



