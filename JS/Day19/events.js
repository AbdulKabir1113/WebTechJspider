function demo(){
    console.log("hello");
}

let a=document.getElementById("d1")
a.ondblclick=()=>{
    console.log("hiii");   
}
let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    console.log("hello dom element");    
})

function demo1(){
    let x=document.body
    let r = Math.round(Math.random()*255)
    let g = Math.round(Math.random()*255)
    let b = Math.round(Math.random()*255)
    x.style.backgroundColor=`rgb(${r},${g},${b})`
}

function demo2(){
    document.body.style.backgroundColor="white"
}

let btn1 =  document.getElementById("btn1")
let d4=  document.getElementById("d4")
let d3=  document.getElementById("d3")

btn1.addEventListener("click",()=>{
    console.log(d3.value);
    d4.textContent=d3.value
    console.log(d3);
    d3.value=""   
})