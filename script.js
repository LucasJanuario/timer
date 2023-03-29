let hr = 0
let min = 0
let sec = 0
let interval

function twoDigits(digito){
    if(digito < 10){
        return('0' + digito)
    }else{
        return(digito)
    }
}

function start() {
    watch()
    interval=setInterval(watch,1)
    
}

function pause() {
    clearInterval(interval)
}

function stop() {
    clearInterval(interval)
    sec=0
    min=0
    document.getElementById('watch').innerText='00:00'
}


function watch() {
    sec++
    if(min==60){
        min=0
        hr++
    }

    if(sec==60){
        min++
        sec=0
    }

    document.getElementById('watch').innerText=twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(sec)
}