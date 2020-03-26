const count = document.getElementById("count")
const counter = document.getElementById("counter")
const reset = document.getElementById("reset")
const set = document.getElementById("set")
const initialCount = 0

renderCount(initialCount)

let currentCount = count.textContent 
let setFlag = false

window.onkeydown = function(event){
    if(event.keyCode === 32 || event.keyCode === 13) {
        event.preventDefault()
        document.getElementById('counter').click()
    }else if(event.keyCode === 8) {
        event.preventDefault()
        document.getElementById('reset').click()
    }else if(event.keyCode === 16) {
        event.preventDefault()
        document.getElementById('set').click()
    }
}

function renderCount(number){
    count.textContent = number
}

function addCount(){
    if(!setFlag){
        currentCount++
    }else{
        currentCount--
    }
    if(currentCount<0){
        alert("Count is already zero")
        setFlag = false
        currentCount++
    }
    renderCount(currentCount)
}

function resetCount(){
    currentCount = initialCount
    renderCount(currentCount)
}

function setCount(){
    let setNumber = prompt("Enter the maximum count to be set : ")
    if (setNumber && !isNaN(setNumber)){
        setFlag = true
        currentCount = setNumber || initialCount
    }
    renderCount(currentCount)
}

counter.addEventListener('click', addCount)
reset.addEventListener('click', resetCount)
set.addEventListener('click', setCount)

