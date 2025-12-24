// literal way
let obj={}
console.log(obj);

// new keyword
let obj1= new Object()
console.log(obj1);

// constructor way
let obj2= Object()
console.log(obj2);

function demo(name,id){
    this.name=name
    this.id=id
}
let a=new demo("kabir",111)
console.log(a);
console.log(a.id);

// insert the key and value

let obj4={}
obj4.name="MAAZ"
obj4.id=901
obj4.city="Nanded"
obj4.height="5.7"
obj4.weight="52kg"

console.log(obj4);
console.log(obj4.name);

// delete
delete obj4.id
console.log(obj4);

// updation

obj4.height=5.8
console.log(obj4);







