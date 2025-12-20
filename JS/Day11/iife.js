(function (){

    console.log("IIFE");
    
})();

(function demo(){

    console.log("IIFE 1");
})();


let a=((x,y)=>{
    console.log("IIFE 2");
    console.log(x+y);
    return "hello"
})(10,20);

console.log(a);
