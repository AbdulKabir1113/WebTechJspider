// function * demo(){
//     yield 'Hello';
//     yield 'World';
//     yield 'From';
//     yield 'Generator';
// }


// let s=demo();
// console.log(s.next().value); // Hello
// console.log(s.next().value); // World
// console.log(s.next().value); // From
// console.log(s.next().value); // Generator
// console.log(s.next().value); // undefined
// console.log(s.next().done); // true


function * demo(){
    console.log("1");
    yield 'Hello';
    console.log("2");
    yield 'World';
    console.log("3");
    yield 'From';
    console.log("4");
    yield 'Generator';
}


let t=demo();
console.log(t);

console.log(t.next().value); // 1 Hello
t.next().value  // 2

console.log(t.next().value); //3 From
console.log(t.next().value); // 4 Generator
console.log(t.next().value); // undefined
console.log(t.next().done); // true

console.log(demo()); // suspended