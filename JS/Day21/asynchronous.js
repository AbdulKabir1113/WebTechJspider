function demo(a,b){
    setTimeout(()=>{
        for(let i=a; i<=b; i++){
            console.log(i);    
        }
    },3000)
}
demo(10,20)

function demo1(){
    console.log("hello"); 
}
demo1()

function demo2(){
    console.log("hello react"); 
    console.log("hello js"); 
}
demo2()

let h = document.querySelector("h1")
let btn = document.querySelector("button")
let btn1 = document.querySelector("#d1")
let date=new Date()
console.log(date.getTime());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getDay());
console.log(date.getMinutes());
console.log(date.getMilliseconds());
console.log(date.getSeconds());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());



function demo3(){
    let d = new Date()
    h.innerText=d.toLocaleTimeString()
}

let i = setInterval(demo3,100)

btn.addEventListener("click",()=>{
    clearInterval(i)
})


btn1.addEventListener("click", () => {
    clearInterval(i)          
    i = setInterval(demo3, 100)
})