let arr = [1,2,3,4,5]

// array destructing

let [a,b,c,d] = arr;
console.log(a)
console.log(c,b);
console.log(d);

// object destructing

let obj = {
    name1:"Kabir",
    id : 121,
    role:"Backend Dev"
}

console.log(obj.name1);

let {name1,id,role} = obj;

console.log(name1);
console.log(id,role);


