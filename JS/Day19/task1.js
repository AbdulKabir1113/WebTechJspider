let div = document.querySelector("div")
console.log(div);

div.setAttribute("id","box")
// div.id = "box"
// console.log(div.id);

div.style.cssText = "width:300px; height:400px; border: 2px solid; padding:20px"

let in1= document.createElement("input")
in1.setAttribute("type","text")
in1.setAttribute("id","d3")
in1.setAttribute("placeholder","Value1 here")
div.append(in1)
div.append(document.createElement("br"));



let in2= document.createElement("input")
in2.setAttribute("type","text")
in2.setAttribute("id","d4")
in2.setAttribute("placeholder","Value2 here")
div.append(in2)
div.append(document.createElement("br"));


let btn = document.createElement("button");
btn.innerText = "Add";
div.append(btn);


let btn1 = document.createElement("button");
btn1.innerText = "Sub";
div.append(btn1);


let btn2 = document.createElement("button");
btn2.innerText = "Mul";
div.append(btn2);


let btn3 = document.createElement("button");
btn3.innerText = "Div";
div.append(btn3);
div.append(document.createElement("br"));

let op= document.createElement("input")
op.setAttribute("type","text")
op.setAttribute("id","d5")
op.setAttribute("placeholder","ans")
// op.setAttribute("readonly", "true")
op.setAttribute("disabled", "true")
div.append(op)


btn.addEventListener("click", () => {
    let sum = Number(in1.value) + Number(in2.value);
    op.value = sum;
});


btn1.addEventListener("click", () => {
    let sub = (in1.value) - (in2.value);
    op.value = sub;
});


btn2.addEventListener("click", () => {
    let mul = (in1.value) *(in2.value);
    op.value = mul;
});


btn3.addEventListener("click", () => {
    let div = (in1.value) / (in2.value);
    op.value = div;
});

