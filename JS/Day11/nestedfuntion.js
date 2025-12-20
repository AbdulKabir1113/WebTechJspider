// function demo(){
//     function d1(){
//         console.log("hello d1");
        
//     }
//     function d2(){
//         console.log("hello d2");   
//     }
//     d1()
//     d2()
// }
// demo()

// function demo1(){
//     function d1(){
//         console.log("hello d1");
        
//     }
//     function d2(){
//         console.log("hello d2");   
//     }
//     return d1()
    
// }
// demo1()

// function demo2(){
//     function d1(){
//         console.log("hello d1");
//     }
//     function d2(){
//         console.log("hello d2");   
//     }
//     return [d1,d2]
// }
// demo2()[0]()

// function demo3(){
//     function d1(){
//         console.log("hello d1");
        
//     }
//     function d2(){
//         console.log("hello d2");   
//     }
//     return [d1,d2]
    
// }
// demo3()[1]()


// var a=10
// function demo4(){
//     var a=100;
//     function d1(){
//         // var a=20
//         console.log("hello d1");
//         console.log(a);   
//         // console.log(this.a);
        
//     }
//     function d2(){
//         var a=10
//         console.log(a);
//         console.log("hello d2");   
//     }
//     return [d1,d2]
    
// }
// demo4()[0]()
// demo4()[1]()


function demo5(){
    function d1(){
        console.log("hello d1");
    }
    function d2(){
        console.log("hello d2");   
    }
    return d1(),d2()
    
}
demo5()