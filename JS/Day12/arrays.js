// literal arrays

let arr=[]
console.log(arr);

// new


let arr1= new Array()
console.log(arr1);


// constructor arrays

let arr2= Array()
console.log(arr2);


push
arr.push(10,20,"hello",NaN,Symbol("hii"))
console.log(arr);

// unshift
arr.unshift(10n,200.56,"heyyy",null,Symbol("heyyy"))
console.log(arr);

// pop
arr.pop()
console.log(arr);

// shift
arr.shift()
console.log(arr);



arr1.push(1,2,3,4,5,6,7,8,9,null,"heyy")
console.log(arr1);


// // slice
console.log(arr1.slice(0,2));
console.log(arr1.slice(0));
console.log(arr1);

// slice
console.log(arr1.slice(0,2));
console.log(arr1.slice(0));
console.log(arr1);


// splice(SI,DelectCount,Newvalue)
console.log(arr1.splice(0,2));
console.log(arr1.splice(0));
console.log(arr1);
arr1.push(1,2,3,4,5,6,7,8,9,null,"heyy")
console.log(arr1);


// length

console.log(arr1.length);

// includes

console.log(arr1.includes(5));
console.log(arr1.includes(59));

// indexof

console.log(arr1.indexOf(5));
console.log(arr1.indexOf(58));

// concat

console.log(arr1.concat(arr));

// // for-of

for(let i of arr1){
    console.log(i);   
}


// // for-in

for(let i in arr1){
    console.log(i);   
}