let obj ={
    name:"kabir",
    id:123,
    role:"web deb"
}

console.log(obj);
let a = JSON.stringify(obj)
console.log(a);
console.log(JSON.parse(a));


let btn = document.querySelector("button")
let inp = document.querySelector("input")
let div = document.querySelector("div")

btn.addEventListener("click",async ()=>{
    console.log(inp.value);
    
    let s = await window.fetch(`https://pixabay.com/api/?key=54057729-dbb064d16408dc8dced642e08&q=${inp.value}&image_type=photo`)
    let data = await s.json()
    console.log(data);
    for(let i of data.hits){
        console.log(i.largeImageURL);
        div.innerHTML+=`<img src="${i.largeImageURL}" width="200">`
    }
})