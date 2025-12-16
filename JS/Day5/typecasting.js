let a = 10, b="20"

console.log(a+b)
console.log(a-b)
console.log(a%b)
console.log(a/b)
console.log(a*b)
console.log(a**b)
console.log(b++)

console.log(a*true)
console.log(a+true)


console.log(20-null)
console.log(20+undefined)
console.log(undefined-null)
console.log("10"*true+false-20)


// Explicit
let x=2, y="29";
console.log(String(x)-Number(y))
console.log(String(x)-Boolean(y))

console.log((x))

console.log(Boolean(Nan))
console.log(Boolean(undefined))
console.log(Boolean(null))