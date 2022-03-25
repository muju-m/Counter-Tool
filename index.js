let button = document.getElementById("button")
let counter = document.getElementById("counter")
let reset = document.getElementById("reset")
let decreament = document.getElementById("decreament")
let count = 0;
const resetValue=0;
button.addEventListener("click", (e)=>{
    
    count = count + 1;
    counter.innerText = count;
})

reset.addEventListener("click", (e)=>{
    count = 0;
    counter.innerText = count;
})

decreament.addEventListener("click", (e)=>{
    if(count == 0){
        alert("Can't decreament further")
    }
    else{
        count = count - 1;
        counter.innerText = count;
    }
})