// Date methods in JS

// const date=new Date()
// console.log(date)
// console.log(date.getFullYear())
// console.log(date.getDay())  // week days in numbers
// console.log(date.getMonth()) 
// console.log(date.getDate())
// console.log(date.getHours())
// console.log(date.getSeconds())
// console.log(date.getUTCDate())
// console.log(date.getUTCFullYear())
// console.log(date.getTime())


let am_pm=document.getElementById("am_pm")

function displayTime(){
    let dateTime=new Date()
    let hrs=dateTime.getHours()
    let mins=padZero(dateTime.getMinutes())
    let secs=padZero(dateTime.getSeconds())
    

    if(hrs>12){
        hrs=hrs-12;
        am_pm.innerHTML="PM"
    }

    document.getElementById("hours").innerHTML=padZero(hrs);
    document.getElementById("minutes").innerHTML=mins;
    document.getElementById("seconds").innerHTML=secs;
}

function padZero(num){
    return num<10?"0"+num:num
}

setInterval(displayTime);