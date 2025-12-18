// Note 
// no para with argu  not possible
//prototype not possible
// arguments not possible
// generator function not possible
//hoisting not possible

let a=()=>{
    console.log("hello"); 
}
a()

// implicit

let b= ()=>
    console.log("hello"); 
b()

let c= x=>
    "hello"+x 
console.log(c(10));

let d= (x,y)=>
    "hello"+x*y
console.log(d(10,9));

let e= (x,y)=>
    console.log( "hello"+x*y);
e(10,5)


// Explicit


let f=(x,y)=> {
    console.log(x+y);
    return "hello"
}
console.log(f(10,30));








// with argu with para

let m= (a,b)=>{
    console.log(a-b);   
}
m(10,20)

// no argu with para

let n= (a,b)=>{
    console.log(a,b);
    console.log(a-b);   
}
n()



// more argu less para

let o= (a,b)=>{
    console.log(a,b);
    
}
o(10,20,30,40)

// less argu more para

let p= (a,b,c,d)=>{
    console.log(a,b,c,d);
}
p(10,20)

// return

let q= (a,b)=>{
    console.log("hello");
    console.log(a+b)
    return "hiiiii"
}
q(10,20)
console.log(q());
console.log(q);

// this keyword

var x=10
let g=function (){
    var x=20
    console.log(x);
    console.log(this.x);
    console.log(window.x); 
}
g()

// function generator gives SE

// let u=*()=>{
//     console.log("1");
//     yield 'Hello';
//     console.log("2");
//     yield 'World';
//     console.log("3");
//     yield 'From';
//     console.log("4");
//     yield 'Generator';
// }


// let t=demo();
// console.log(t.next().value);
// console.log(t.next().value);


// prototype error not a constructor
// let j= ()=>{
//     console.log("hiioiii");
// }

// console.log("prototype" in j);

// let z = new j();
// console.log(Object.getPrototypeOf(z)==j.prototype);








