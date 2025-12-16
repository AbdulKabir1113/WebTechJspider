let str=""
for(let i=1; i<=5; i++){
    for(let j=1; j<=5; j++){
        str+="* "
    }
    str+="\n" 
}
console.log(str);

// 

let str1=""
for(let i=1; i<=5; i++){
    for(let j=1; j<=5; j++){
        str1+="* "
    }
    str1+="<br>" 
}
document.writeln(str1);

// 

let str2=""
for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        str2+="* "
    }
    str2+="\n" 
}
console.log(str2);

// 

let str3=""
for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        str3+="* "
    }
    str3+="<br>" 
}
document.writeln(str3);

// 

let str4=""
for(let i=1; i<=5; i++){
    for(let j=1; j<=5-i; j++){
        str4+=" "
    }
    for(let k=1; k<=i; k++){
        str4+="*"
    }
    str4+="\n" 
}
console.log(str4);

// 

let str5=""
for(let i=1; i<=5; i++){
    for(let j=1; j<=5-i; j++){
        str5+="&nbsp;"
    }
    for(let k=1; k<=i; k++){
        str5+="*"
    }
    str5+="<br>" 
}
document.writeln(str5);


// 
let str6=""
for(let i=1; i<=5; i++){
    for(let j=1; j<=5-i; j++){
        str6+=" "
    }
    for(let k=1; k<=(2*i-1); k++){
        str6+="*"
    }
    str6+="\n" 
}
console.log(str6);

let str7=""
for(let i=1; i<=5; i++){
    for(let j=1; j<=5-i; j++){
        str7+="&nbsp;"
    }
    for(let k=1; k<=(2*i-1); k++){
        str7+="*"
    }
    str7+="<br>" 
}
document.writeln(str7);


// 

let str8=""
for(let i=1; i<=5; i++){
    for(let j=1; j<=5; j++){
        str8+=j
    }
    str8+="\n" 
}
console.log(str8);

let str9=""
for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        str9+=i
    }
    str9+="\n" 
}
console.log(str9);


let str10=""
for(let i=1; i<=5; i++){
    for(let j=1; j<=5-i; j++){
        str10+=" "
    }
    for(let k=1; k<=i; k++){
        str10+=k
    }
    str10+="\n" 
}
console.log(str10);


let str11="" 

for(let i=1; i<=5; i++){
    for(let j=1; j<=5-i; j++){
        str11+=" "
    }
    for(let k=i+1; k>1; k--){
        str11+=k-1
    }
    str11+="\n" 
}
console.log(str11);


// 
let str12="" 
let space1=8;
for(let i=1; i<=5; i++){
    for(let l=1; l<=i; l++){
        str12+=l;
    }
    for(let j=1; j<=space1; j++){
        str12+=" "
    }
    space1-=2;
    for(let k=i+1; k>1; k--){
        str12+=k-1
    }
    str12+="\n" 
}
console.log(str12);