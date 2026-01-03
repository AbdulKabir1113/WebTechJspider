function demo3(a,b){
    new promise((res,rej)=>{
        setTimeout(()=>{
            if(isNaN(a) || isNaN(b)){
                rej()
            }else {
                res()
            }
        },5000)
    })
    .then(()=>{
        console.log("hello then1");
    })
    .then(()=>{
        console.log("hello then2");
    })
    .then(()=>{
        console.log("hello then3");
    })
    .then(()=>{
        console.log("hello then4");
    })
    .catch(()=>{
        console.log("edit give xorrect inputs");
    })
    .catch(()=>{
        console.log("hello catch2");
    })
    .catch(()=>{
        console.log("hello catch3");
    })
    .finally(()=>{
        console.log("hello finally1");
    })
    .finally(()=>{
        console.log("hello finally2");
    })
    .finally(()=>{
        console.log("hello finally3");
    })
}


// aync await

async function demo(){
    console.log("hello 1");
    let x = await "hello 2"
    log
    
}