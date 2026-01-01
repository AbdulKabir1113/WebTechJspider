let gp = document.getElementById("gp")
let par = document.getElementById("par")
let ch = document.getElementById("ch")

gp.addEventListener("click",(x)=>{
    x.stopImmediatePropagation()
    console.log("grand parent clicked");
    x.target.style.backgroundColor = "red"
    
},false)

par.addEventListener("click",(y)=>{
    y.stopImmediatePropagation()
    console.log("parent clicked");
    y.target.style.backgroundColor = "yellow"
},false)

ch.addEventListener("click",(z)=>{
    z.stopImmediatePropagation()
    console.log("chicked clicked");
    z.target.style.backgroundColor = "green"
},false)

// false = bubbling => flowb from down to top
// true = capturing => flow from top to down

// target = elemet target