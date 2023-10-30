const week = ['SUN', 'MON','TUE','WED','THU','FRI','SAT']

function updateTime(){
    let now = new Date();

    document.getElementById('time').innerText = zeropadding(now.getHours(),2) + ':' + 
    zeropadding(now.getMinutes(),2) + ':' + 
    zeropadding(now.getSeconds(),2);


    document.getElementById('date').innerText = 
    now.getFullYear()+ '-' +
    zeropadding(now.getMonth() + 1,2)+'-'+
    zeropadding(now.getDate(),2)+' '+
    week[now.getDay()];



}

updateTime();

setInterval(updateTime,1000);

function zeropadding(num,digit){
    return String(num).padStart(digit,0);
}