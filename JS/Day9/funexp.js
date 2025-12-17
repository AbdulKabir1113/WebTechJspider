// Note 
// no para with argu  not possible

//hoisting not possible


// no argu no para 
let a= function (){
    console.log("hiii");  
}

a()

// with argu with para

let b=function (a,b){
    console.log(a-b);   
}
b(10,20)

// no argu with para

let c=function (a,b){
    console.log(a,b);
    console.log(a-b);   
}
c()



// more argu less para

let d=function (a,b){
    console.log(a,b);
    console.log(arguments);
    console.log(arguments[0]);
}
d(10,20,30,40)

// less argu more para

let e=function (a,b,c,d){
    console.log(a,b,c,d);
}
e(10,20)

// return

let f=function (a,b){
    console.log("hello");
    console.log(a+b)
    return "hiiiii"
}
f(10,20)
console.log(f());
console.log(f);

// this keyword
var x=10
let g=function (){
    var x=20
    console.log(x);
    console.log(this.x);
    console.log(window.x); 
}
g()

//hoisting not possible through  var,let also its give typerror

// h()
// var h=function (){
//     console.log("heyyy");
// }

// we cannot access the urs after return 
let i=function (){
    console.log("hello");
    return "js"
    console.log("hello");
    return "java"
}

console.log(i());

// prototype possible 

let j=function (){
    console.log("hiioiii");
}

console.log("prototype" in j);

let z = new j();
console.log(Object.getPrototypeOf(z)==j.prototype);




