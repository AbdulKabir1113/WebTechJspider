// number datatype

let a = 10
console.log(a);
console.log(typeof a);


let a1 = 10.5
console.log(a1);
console.log(typeof a1)

let a2 = 10.98765678
console.log(a2);
console.log(typeof a2)

let a4 = -10
console.log(a4);
console.log(typeof a4)

// bigint datatype

let a3 = 10n
console.log(a3);
console.log(typeof a3)


let a5 = -10n
console.log(a5);
console.log(typeof a5)

// boolean datatype

let t = true
console.log(t);
console.log(typeof t)

let t1 = false
console.log(t1);
console.log(typeof t1)


// String datatype

let str = 'i am kabir'
console.log(str);
console.log(typeof str)

// let str1 = 'i'm kabir '
// console.log(str1);
// console.log(typeof str1)

let str2 = "i am kabir"
console.log(str2);
console.log(typeof str2)

// let str3 = "i am kabir
//             from nanded"
// console.log(str3);
// console.log(typeof str3)

let str4 = `i am kabir`
console.log(str4);
console.log(typeof str4)

// let str5 = `i am kabir
//             from nnd`
// console.log(str5);
// console.log(typeof str5)

let q1=20
let str6 = "i am " +q1+ " kabir"
console.log(str6);
console.log(typeof str6)

let str7 = `i am ${q1} kabir`
console.log(str7);
console.log(typeof str7)

// null datatype

var b=10;
console.log(b);
console.log(typeof b)
b=null;
console.log(b);
console.log(typeof b) // object

// undefined datatype

let c
console.log(c);
console.log(typeof c)

const c1 = undefined
console.log(c1);
console.log(typeof c1)

// Nan datatype

var n = NaN
console.log(n);
console.log(typeof n)


var v = 28
console.log(v);
console.log(typeof v)
console.log(isNaN (v))

var v1 = "28a"
console.log(v);
console.log(typeof v1)
console.log(isNaN (v1))

//  symbol datatype

let x = Symbol("hii")
console.log(x); //symbol("hii")
console.log(typeof x); //symbol
console.log(x.description); // hii
