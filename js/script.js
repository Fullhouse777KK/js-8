const second = document.querySelector('.s')
const minutes = document.querySelector('.m')
const hours = document.querySelector('.h')
const hoursBottom = document.querySelector('.hours')
const minutesBottom = document.querySelector('.minutes')

function clock() {
    let time = new Date()
    let sec = time.getSeconds() * 6
    let min = time.getMinutes() * 6
    let hour = time.getHours() * 30

    second.style = `transform: rotate(${sec}deg)`
    minutes.style = `transform: rotate(${min}deg)`
    hours.style = `transform: rotate(${hour + (min / 12)}deg)`
    setTimeout(() => {
        clock()
    }, 1000); 
}

function clockTwo(){
let time = new Date() 
let hour = time.getHours()
let min = time.getMinutes()

hour < 10 ? hoursBottom.innerText = '0' + hour : hoursBottom.innerText = hour
minutes < 10 ? minutesBottom.innerText = '0' + min :  minutesBottom.innerText = min

setTimeout(() => {
    clock()
}, 60000);

   
}

clockTwo()



