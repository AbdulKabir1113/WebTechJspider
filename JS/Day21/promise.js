function demo(a,b){
    new Promise((res,rej)=>{
        setTimeout(()=>{
            if(isNaN(a) || isNaN(b)){
                rej("invalid inputs")
            }else{
                res("valid inputs")
            }
        },5000)
    })
    .then(()=>{
        for(let i=a; i<=b; i++) console.log(i);
    }).catch(()=>{
        window.error("give me correct output")
    }).finally(()=>{
        console.log("always run");   
    })
}

demo(2,29)