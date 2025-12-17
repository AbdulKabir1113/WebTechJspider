// no argu no para

function demo(){
    console.log("hiii");   
}
demo()

// with argu with para

function demo1(a,b){
    console.log(a-b);   
}
demo1(10,20)

// no argu with para

function demo2(a,b){
    console.log(a,b);
    console.log(a-b);   
}
demo2()

// with argu no para

// function demo3(){
//     console.log(a,b);
//     console.log(a-b);   
// }
// demo3(1,2)

// moee argu less para

function demo3(a,b){
    console.log(a,b);
    console.log(arguments);
    console.log(arguments[0]);
}
demo3(10,20,30,40)

// less argu more para

function demo4(a,b,c,d){
    console.log(a,b,c,d);
}
demo4(10,20)

// return

function demo5(a,b){
    console.log("hello");
    console.log(a+b)
    return "hiiiii"
}
demo5(10,20)
console.log(demo5());
console.log(demo5);

// // return 
// function demo6(a,b){
//     console.log(a+b);
//     return "hiiiii"
// }
// demo6(80,20)
// console.log(demo6(10,20));
// console.log(demo6);

// this keyword
var a=10
function demo6(){
    var a=20
    console.log(a);
    console.log(this.a);
    console.log(window.a); 
}
demo6()

//hoisting 

demo7()
function demo7(){
    console.log("heyyy");
}

// we cannot access the urs after return 
function demo8(){
    console.log("hello");
    return "js"
    console.log("hello");
    return "java"
}

console.log(demo8());

// prototype

function demo9(){
    console.log("hiioiii");
}

console.log("prototype" in demo9);

let s= demo9()
console.log(Object.getPrototypeOf(s) == demo9.prototype);