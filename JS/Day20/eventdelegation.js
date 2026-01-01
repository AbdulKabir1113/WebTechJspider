let gp = document.getElementById("gp")
let par = document.getElementById("par")
let ch = document.getElementById("ch")

gp.addEventListener("click",(e)=>{
    
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.tagName);
    // console.log(e.clientX);
    // console.log(e.clientY);

    if(e.target.id=="gp") console.log("gp Clciked");
    else if(e.target.id=="par") console.log("parent Clciked");
    else if(e.target.id=="ch") console.log("child Clciked");
})



