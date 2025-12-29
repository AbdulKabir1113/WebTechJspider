let body = document.body;

let table = document.createElement("table");
body.append(table);

// HTML attributes
table.setAttribute("border", "2");
table.setAttribute("cellspacing", "0");
table.setAttribute("width", "400");
table.setAttribute("height", "1200");

// Row 1
let tr1 = document.createElement("tr");
table.append(tr1);

// col1
let td1 = document.createElement("td");
td1.innerText = "Row1 Col1";
tr1.append(td1);

let table1= document.createElement("table")
table.append(table1)
table1.setAttribute("border", "2");
table1.setAttribute("cellspacing", "0");
table1.setAttribute("width", "200");
table1.setAttribute("height", "300");

let tr11 = document.createElement("tr");
table1.append(tr11);
let td11= document.createElement("td");
td11.innerText = "Row11 Col11";
tr11.append(td11);
let td12= document.createElement("td");
td12.innerText = "Row11 Col12";
tr11.append(td12);
let td13= document.createElement("td");
td13.innerText = "Row11 Col13";
tr11.append(td13);
let td14= document.createElement("td");
td14.innerText = "Row11 Col14";
tr11.append(td14);

let tr12 = document.createElement("tr");
table1.append(tr12);
let td111= document.createElement("td");
td111.innerText = "Row12 Col111";
tr12.append(td111);
let td121= document.createElement("td");
td121.innerText = "Row12 Col121";
tr12.append(td121);
let td131= document.createElement("td");
td131.innerText = "Row12 Col131";
tr12.append(td131);
let td141= document.createElement("td");
td141.innerText = "Row12 Col141";
tr12.append(td141);



let tr13 = document.createElement("tr");
table1.append(tr13);
let td112= document.createElement("td");
td112.innerText = "Row13 Col112";
tr13.append(td112);
let td122= document.createElement("td");
td122.innerText = "Row13 Col122";
tr13.append(td122);
let td132= document.createElement("td");
td132.innerText = "Row13 Col132";
tr13.append(td132);
let td142= document.createElement("td");
td142.innerText = "Row13 Col142";
tr13.append(td142);


// let tr14 = document.createElement("tr");
// table1.append(tr14);
// let td112= document.createElement("td");
// td112.innerText = "Row13 Col112";
// tr13.append(td112);
// let td122= document.createElement("td");
// td122.innerText = "Row13 Col122";
// tr13.append(td122);
// let td132= document.createElement("td");
// td132.innerText = "Row13 Col132";
// tr13.append(td132);
// let td142= document.createElement("td");
// td142.innerText = "Row13 Col142";
// tr13.append(td142);


let td2 = document.createElement("td");
td2.innerText = "Row1 Col2";
tr1.append(td2);

// Row 2
let tr2 = document.createElement("tr");
table.append(tr2);

let td3 = document.createElement("td");
td3.innerText = "Row2 Col1";
tr2.append(td3);

let td4 = document.createElement("td");
td4.innerText = "Row2 Col2";
tr2.append(td4);

// Row 3
let tr3 = document.createElement("tr");
table.append(tr3);

let td5 = document.createElement("td");
td5.innerText = "Row3 Col1";
tr3.append(td5);

let td6 = document.createElement("td");
td6.innerText = "Row3 Col2";
tr3.append(td6);

// Row 4
let tr4 = document.createElement("tr");
table.append(tr4);

let td7 = document.createElement("td");
td7.innerText = "Row4 Col1";
tr4.append(td7);

let td8 = document.createElement("td");
td8.innerText = "Row4 Col2";
tr4.append(td8);
