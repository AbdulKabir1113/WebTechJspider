function demo(a,b,task){
    // console.log(a,b,task);
    task(a,b)
}
demo(30,10, (e,f)=>  {
    console.log(e+f);
})

demo(30,10, (e,f)=>  {
    console.log(e-f);
})

demo(30,10, (e,f)=>  {
    console.log(e*f);
})

demo(30,10, (e,f)=>  {
    console.log(e/f);
})

demo(30,10, (e,f)=>  {
    console.log(e%f);
})



function demo1(x,y,task){
    // console.log(a,b,task);
    task(x,y)
}
demo(70,50, function(a,b)  {
    console.log(a+b);
})

demo(70,50, function(a,b)  {
    console.log(a-b);
})

demo(70,50, function(a,b)  {
    console.log(a*b);
})

demo(70,50, function(a,b)  {
    console.log(a/b);
})

demo(70,50, function(a,b)  {
    console.log(a%b);
})