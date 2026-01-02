let form = document.querySelector("form")

let inp1 = document.querySelector("#inp1")

let inp2 = document.querySelector("#inp2")

let inp3 = document.querySelector("#inp3")

let inp4 = document.querySelector("#inp4")

let table = document.querySelector("table")

form.addEventListener("click",(e)=>{
    
        e.preventDefault()
    
    if(e.target.innerText=="ADD"){
        if(inp1.value!=""&& inp2.value!=""&& inp3.value!=""&& inp4.value!=""){
        table.innerHTML+=`<tr>
                            <td>${inp1.value}</td>
                            <td>${inp2.value}</td>
                            <td>${inp3.value}</td>
                            <td>${inp4.value}</td>
                            <td><button>EDIT</button></td>
                            <td><button>DELETE</button></td>
                            </tr>`
                
        inp1.value=""
        inp2.value=""
        inp3.value=""
        inp4.value=""
    }else{
        window.alert("Fill the Inputs")
    }
    }
    else if(e.target.innerText=="DELETE"){
        e.target.parentElement.parentElement.remove()
    }
    else if(e.target.innerText=="EDIT"){
        
        
        inp4.value = e.target.parentElement.previousElementSibling.innerText
        inp3.value = e.target.parentElement.previousElementSibling.previousElementSibling.innerText
        inp2.value = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText
        inp1.value = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText
        e.target.innerText="UPDATE"
        
        
    }
    else if(e.target.innerText=="UPDATE"){
        e.target.parentElement.previousElementSibling.innerText=inp4.value;
        e.target.parentElement.previousElementSibling.previousElementSibling.innerText=inp3.value
        e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText=inp2.value
        e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText=inp1.value
        e.target.innerText="EDIT"

        inp1.value=""
        inp2.value=""
        inp3.value=""
        inp4.value=""
    }
})