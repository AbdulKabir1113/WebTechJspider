// console.log(a); // RE => not defined

// Hoisting

console.log(p);
var p = 10;
console.log(p);

// console.log(p); RE
let q = 20;
console.log(q);

// console.log(r); RE
const r = 30;
console.log(r);

// Declaration

var a
console.log(a);

let b
console.log(b);

// const c 
// console.log(c); //SE

// Initialization

a=80
console.log(a);

b=200
console.log(b);

// c=800
// console.log(c); //SE

// Declaration & Initialization

var d=23
console.log(d);

let e=24
console.log(e);

const f=83
console.log(f); 

// Re-initialization

d=231
console.log(d);

e=241
console.log(e);

// const f=83
// console.log(f); //SE


// Re-Declaration
var d=232
console.log(d);

// let e=24
// console.log(e); //SE

// const f=83
// console.log(f); //SE