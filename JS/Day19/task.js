let a = document.getElementById("d1")

// a.addEventListener("input", ()=>{
//     let bd = document.body
//     let b =a.value;
//     console.log(b);
    
//     bd.style.backgroundColor = `${b}`;
// })

a.addEventListener("input", ()=>{
    
    let color =a.value;
    console.log(color);
    
    a.style.backgroundColor = `${color}`;
})