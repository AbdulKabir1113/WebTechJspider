let arr=[10,20,30,40,50]
// map hom is accepts cbf

let x= arr.map((e)=>{
    return e+5
})
console.log(x);


// sort hom it accepts cbf

let arr1=[50,6,10,0,9,80,2]

console.log(arr1);
console.log(arr1.sort());

let r= arr.sort((e,f)=>{
    return e-f
})
console.log(r);

let r1= arr.sort((e,f)=>{
    return f-e
})
console.log(r1);
console.log(arr1);

// filter hom it accepts cbf
let arr2=[10,20,30,40,50]
console.log(arr2);
let q=arr2.filter((e)=>{
    return e>20
})
console.log(q);
console.log(arr2);


// reduce hom it accepts cbf
let w=arr2.reduce((acc,v)=>{
    console.log(acc,v);
    return acc+v
})
console.log(w);

console.log(arr2);
console.log(arr2.reverse());

// for each 
let arr3=[10,20,30,40,50]

let t=arr3.forEach((e,f)=>{
    console.log(e,f);
})

// enteries any datatype will convert into array
let t1=arr3.entries()
console.log(t1);
for(let i of t1){
    console.log(i);   
}


// find hom it accepts cbf
let y=arr3.find((e)=>{
    return e>20
})
console.log(y);

let arr7=[9,2,'❤️']
console.log(arr7.sort());


