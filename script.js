const days = document.getElementById('days')
setInterval(() => {
    let now3 = new Date()
    let time3 = now3.getUTCDay()
    if (time3 < 10) {
        days.textContent = "0"+time3
    } else {
        days.textContent = time3
    }
}, 1000);
const hours = document.getElementById('hours')
setInterval(() => {
    let now2 = new Date()
    let time2 = now2.getHours()
    if (time2 < 10) {
        hours.textContent = "0"+time2
    } else {
        hours.textContent = time2
    }
}, 1000);
const minutes = document.getElementById('minutes')
setInterval(() => {
    let now = new Date()
    let time = now.getMinutes()
    if (time < 10) {
        minutes.textContent = "0"+time
    } else {
        minutes.textContent = time
    }
}, 1000);
const seconds = document.getElementById('seconds')
setInterval(() => {
    let now1 = new Date()
    let time1 = now1.getSeconds()
    if (time1 < 10) {
        seconds.textContent = "0"+time1
    } else {
        seconds.textContent = time1
    }
}, 1000);
const image1= document.getElementById('img1')
image1.style.display = "none"

const image = document.getElementById('img')
image.addEventListener('click',(event)=>{
    image.style.display= "none"
    image1.style.display = "block"
    event.preventDefault()
})
image1.addEventListener('click',(event)=>{
    image1.style.display= "none"
    image.style.display = "block"
    event.preventDefault()
})

