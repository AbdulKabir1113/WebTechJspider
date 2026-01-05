// spread

let arr = [1,2,3]
console.log(arr);
console.log(...arr);

// rest

function demo(x,...y){
    console.log(x);
    console.log(y);
    console.log(...y);    
}
demo(10,20,30,40)
