// seal

let obj={
    name:"xyz",
    id:"123"
}
console.log(Object.isSealed(obj));
Object.seal(obj)
console.log(Object.isSealed(obj));

console.log(obj);

// updation is possible
obj.name="abc"
console.log(obj);

// insertion not possible 
obj.role="fronted"
console.log(obj);

// deletion not possible 
delete obj.name
console.log(obj);


// freeze

let obj1={
    name:"kabir",
    id:"313"
}
console.log(Object.isFrozen(obj1));
Object.freeze(obj1)
console.log(Object.isFrozen(obj1));

console.log(obj1);

// updation is not possible
obj1.name="abc"
console.log(obj1);

// insertion not possible 
obj1.role="fronted"
console.log(obj1);

// deletion not possible 
delete obj1.name
console.log(obj1);


// keys
console.log(Object.keys(obj));
// values
console.log(Object.values(obj1));

let x= Object.entries(obj)
console.log(x);


// assign

let obj3={
    name:"abc",
    sal:"12lpa"
}

let obj4={
    name1:"abc",
    role:"backend"
}


console.log(Object.assign(obj3,obj4));

let obj5={
    name2:"xyz",
    role1:"backend"
}
console.log(Object.assign(obj3,obj4,obj5));