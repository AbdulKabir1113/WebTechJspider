let button = document.querySelector("button");

function demo(){
    console.log("hiiii");   
}

function fun2(){
    console.log("hello");   
}

let image = document.querySelector("img");
function newImage(){
    image.src = "./download.jpg"
}

function oldImage(){
    image.src = "./download (1).jpg"
}

let p= document.querySelector("p");
function newBackground() {
    p.style.cssText = "background-color: yellow; color: red;";
}

function oldBackground() {
    p.style.cssText = "background-color: white; color: black;";
}

let div = document.querySelector("div");
function incWidth() {
    div.style.width = "400px";
    div.style.height = "400px";
    div.style.backgroundColor = "lightblue";
}

function decWidth() {
    div.style.width = "200px";
    div.style.height = "200px";
    div.style.backgroundColor = "white";
}

let article = document.querySelector("article");
function incSize() {
    article.style.fontSize = "30px";
}
function decSize() {
    article.style.fontSize = "20px";
}

function down(){
    console.log("hiiii");   
}

function up(){
    console.log("hello");   
}

let list=document.querySelector("ol");


let l1=list.firstElementChild;

function clr(){
    l1.style.backgroundColor="red";
}

let l2=list.firstElementChild.nextElementSibling;

function clr1(){
    l2.style.backgroundColor="yellow";
}

let l3=list.firstElementChild.nextElementSibling.nextElementSibling;

function clr2(){
    l3.style.backgroundColor="blue";
}

let l4=list.lastElementChild;

function clr3(){
    l4.style.backgroundColor="orange";
}


function oldClr(){
    l1.style.backgroundColor="white";
}

function oldClr1(){
    l2.style.backgroundColor="white";
}

function oldClr2(){
    l3.style.backgroundColor="white";
}

function oldClr3(){
    l4.style.backgroundColor="white";
}

let section=document.querySelector("section");
section.style.cssText="width:200px; height:200px; border:2px solid black; background-color:red;"

// function circleSec(){
// section.style.cssText="width:200px; height:200px; border:2px solid black; background-color:green; border-radius:50%;"
// }

// function sqrSec(){
//     section.style.cssText="width:200px; height:200px; border:2px solid black; background-color:red;"
// }

let div1=document.querySelectorAll("div")[1];
div1.style.cssText="width:200px; height:200px; border:2px solid black; background-color:green;"

function circle(){
div1.style.cssText="width:200px; height:200px; border:2px solid black; background-color:orange; border-radius:50%;"
}

function sqr(){
    div1.style.cssText="width:200px; height:200px; border:2px solid black; background-color:green;"
}

// let section=document.querySelector("section");
// section.style.cssText="width:200px; height:200px; border:2px solid black; background-color:red;"

// function sqr(){
//     section.style.cssText="width:200px; height:200px; border:2px solid black; background-color:green;"
// }

