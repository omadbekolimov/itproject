const ded = '2024-08-11'

function getTime(endTime){
    const timer = Date.parse(endTime) - Date.parse(new Date()),
    days = Math.floor( timer / ( 1000*60*60*24)),
    hours = Math.floor ((timer / (1000*60*60)) %24),
    minutes = Math.floor ((timer / 1000/60) % 60 ),
    seconds = Math.floor ((timer / 1000 )% 60 )


    return {days, hours,minutes , seconds }
}

function setClock(selector, endTime){
    const timer = document.querySelector(selector),
    days =timer.querySelector('#days'),
    hours = timer.querySelector('#hours'),
    minutes = timer.querySelector('#minutes'),
    seconds = timer.querySelector ('#seconds')
    timeInterval = setInterval(updateClock , 1000)
    
    updateClock

    function updateClock(){
        const t = getTime(endTime)

        days.innerHTML = t.days
        hours.innerHTML = t.hours
        minutes.innerHTML = t.minutes
        seconds.innerHTML = t.seconds

        if(t.timeInterval <= 0){
            clearInterval(timeInterval)
        }
    }
    
}
setClock('.col' , ded)