let count = document.querySelector(".subtitle")
let lightbulb1 = document.querySelector("#lightbulb1")
let lightbulb2 = document.querySelector("#lightbulb2")
let lightbulb3 = document.querySelector("#lightbulb3")
let num = 0

console.log(document)

lightbulb1.addEventListener("click", function(){
    num++
    count.textContent = `You've clicked the lights ${num} times`
    lightbulb1.classList.toggle("active");

   
})

lightbulb2.addEventListener("click", function(){
    num++
    count.textContent = `You've clicked the lights ${num} times`
    lightbulb2.classList.toggle("active");
})

lightbulb3.addEventListener("click", function(){
    num++
    count.textContent = `You've clicked the lights ${num} times`
    lightbulb3.classList.toggle("active");
})

// if(lightbulb1.classList == "item lightbulb active"){
//         lightbulb1.classList.toggle("item lightbulb");
//     }else{
//         lightbulb1.classList.toggle("item lightbulb active");
//     }
