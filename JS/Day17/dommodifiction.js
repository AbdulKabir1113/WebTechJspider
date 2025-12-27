// let a=document.getElementById("d1")
// console.log(a);
// console.log(a.innerText);
// console.log(a.textContent);
// console.log(a.innerHTML);
// a.innerText="hi"
// console.log(a.innerText);
// console.log(a.textContent);
// console.log(a.innerHTML);
// a.textContent+=" css"
// a.innerText="<span>Hello span</span></span>"
// a.innerHTML="<span>Hello span</span></span>"
// console.log(a.innerText);
// console.log(a.innerHTML);

// let b=document.body
// console.log(b);

// b.innerHTML+="<h3>Hello h3</h3>"
// let c=b.innerHTML=`<table id=d2 border=2px solid height=200px width=200px>
//                     <tr>
//                         <td></td>
//                         <td></td>
//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td></td>
//                     </tr>
//                 </table>   `
// console.log(c);

// console.log(c.firstElementChild.firstElementChild); its a string soo its not possible to fetch the any things

// let d=document.getElementById("d2")
// console.log(d); // tbody
// console.log(d.firstElementChild.firstElementChild); //tr

// but is not recomended 3 disadv 1) security issue 2) overridding 3) reducing the dom tree efficiency
// to overcome this we documnet.creatElement

let b=document.body
console.log(b);

let p=document.createElement("h2")
console.log(p);
b.append(p)
p.innerText="hello"
p.style.backgroundColor="red"
p.style.border="2px solid red"

p.setAttribute("id","d1")
p.removeAttribute("id")
p.remove()

let t=document.createElement("table")
b.append(t)
t.setAttribute("border","2px solid")
t.setAttribute("height","200px")
t.setAttribute("width","200px")

let tr1=document.createElement("tr")
t.appendChild(tr1)
let tr2=document.createElement("tr")
t.appendChild(tr2)

let td1=document.createElement("td")
let td2=document.createElement("td")
tr1.appendChild(td1)
tr1.appendChild(td2)             

let td3=document.createElement("td")
let td4=document.createElement("td")
tr2.appendChild(td3)
tr2.appendChild(td4)    

td1.style.background="red"
t.setAttribute("cellspacing","0px")
td1.setAttribute("colspan","2")
td2.remove()