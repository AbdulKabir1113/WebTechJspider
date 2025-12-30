// let body = document.body;

// let table = document.createElement("table");
// body.append(table);

// // HTML attributes
// table.setAttribute("border", "2");
// table.setAttribute("cellspacing", "0");
// table.setAttribute("width", "400");
// table.setAttribute("height", "1200");

// // Row 1
// let tr1 = document.createElement("tr");
// table.append(tr1);

// // col1
// let td1 = document.createElement("td");
// td1.innerText = "Row1 Col1";
// tr1.append(td1);

// let table1= document.createElement("table")
// table.append(table1)
// table1.setAttribute("border", "2");
// table1.setAttribute("cellspacing", "0");
// table1.setAttribute("width", "200");
// table1.setAttribute("height", "300");

// let tr11 = document.createElement("tr");
// table1.append(tr11);
// let td11= document.createElement("td");
// td11.innerText = "Row11 Col11";
// tr11.append(td11);
// let td12= document.createElement("td");
// td12.innerText = "Row11 Col12";
// tr11.append(td12);
// let td13= document.createElement("td");
// td13.innerText = "Row11 Col13";
// tr11.append(td13);
// let td14= document.createElement("td");
// td14.innerText = "Row11 Col14";
// tr11.append(td14);

// let tr12 = document.createElement("tr");
// table1.append(tr12);
// let td111= document.createElement("td");
// td111.innerText = "Row12 Col111";
// tr12.append(td111);
// let td121= document.createElement("td");
// td121.innerText = "Row12 Col121";
// tr12.append(td121);
// let td131= document.createElement("td");
// td131.innerText = "Row12 Col131";
// tr12.append(td131);
// let td141= document.createElement("td");
// td141.innerText = "Row12 Col141";
// tr12.append(td141);



// let tr13 = document.createElement("tr");
// table1.append(tr13);
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


// // let tr14 = document.createElement("tr");
// // table1.append(tr14);
// // let td112= document.createElement("td");
// // td112.innerText = "Row13 Col112";
// // tr13.append(td112);
// // let td122= document.createElement("td");
// // td122.innerText = "Row13 Col122";
// // tr13.append(td122);
// // let td132= document.createElement("td");
// // td132.innerText = "Row13 Col132";
// // tr13.append(td132);
// // let td142= document.createElement("td");
// // td142.innerText = "Row13 Col142";
// // tr13.append(td142);


// let td2 = document.createElement("td");
// td2.innerText = "Row1 Col2";
// tr1.append(td2);

// // Row 2
// let tr2 = document.createElement("tr");
// table.append(tr2);

// let td3 = document.createElement("td");
// td3.innerText = "Row2 Col1";
// tr2.append(td3);

// let td4 = document.createElement("td");
// td4.innerText = "Row2 Col2";
// tr2.append(td4);

// // Row 3
// let tr3 = document.createElement("tr");
// table.append(tr3);

// let td5 = document.createElement("td");
// td5.innerText = "Row3 Col1";
// tr3.append(td5);

// let td6 = document.createElement("td");
// td6.innerText = "Row3 Col2";
// tr3.append(td6);

// // Row 4
// let tr4 = document.createElement("tr");
// table.append(tr4);

// let td7 = document.createElement("td");
// td7.innerText = "Row4 Col1";
// tr4.append(td7);

// let td8 = document.createElement("td");
// td8.innerText = "Row4 Col2";
// tr4.append(td8);


let b = document.body

table1 = document.createElement('table')
b.append(table1)
table1.setAttribute("border", "2px")
table1.setAttribute("height", "210px")
table1.setAttribute("width", "410px")

// rows
let tr_1 = document.createElement("tr")
let tr_2 = document.createElement("tr")
let tr_3 = document.createElement("tr")
let tr_4 = document.createElement("tr")

table1.appendChild(tr_1)
table1.appendChild(tr_2)
table1.appendChild(tr_3)
table1.appendChild(tr_4)

// columns
let td_1 = document.createElement("td")
let td_2 = document.createElement("td")

tr_1.appendChild(td_1)
tr_1.appendChild(td_2)
td_1.appendChild(innertable1())
td_2.appendChild(innertable2())

let td_3 = document.createElement("td")
let td_4 = document.createElement("td")

tr_2.appendChild(td_3)
tr_2.appendChild(td_4)
td_3.appendChild(innertable3())
td_4.appendChild(innertable4())

let td_5 = document.createElement("td")
let td_6 = document.createElement("td")

tr_3.appendChild(td_5)
tr_3.appendChild(td_6)
td_5.appendChild(innertable5())
td_6.appendChild(innertable6())

let td_7 = document.createElement("td")
let td_8 = document.createElement("td")

tr_4.appendChild(td_7)
tr_4.appendChild(td_8)
td_7.appendChild(innertable7())
td_8.appendChild(innertable8())


function innertable1() {
    let t1 = document.createElement("table")
    b.append(t1)
    t1.setAttribute("border", "2px")
    t1.setAttribute("height", "200px")
    t1.setAttribute("width", "200px")
    t1.style.backgroundColor = "orange"

    let tr1 = document.createElement("tr")
    let tr2 = document.createElement("tr")
    let tr3 = document.createElement("tr")
    let tr4 = document.createElement("tr")

    t1.appendChild(tr1)
    t1.appendChild(tr2)
    t1.appendChild(tr3)
    t1.appendChild(tr4)

    let td1 = document.createElement("td")
    td1.setAttribute("colspan", "4")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")

    tr1.appendChild(td1)
    tr1.appendChild(td2)
    tr1.appendChild(td3)
    tr1.appendChild(td4)

    td2.remove()
    td3.remove()
    td4.remove()


    let td5 = document.createElement("td")
    td5.setAttribute("rowspan", "2")
    let td6 = document.createElement("td")
    let td7 = document.createElement("td")
    td7.setAttribute("rowspan", "2")
    let td8 = document.createElement("td")

    tr2.appendChild(td5)
    tr2.appendChild(td6)
    tr2.appendChild(td7)
    tr2.appendChild(td8)

    let td9 = document.createElement("td")
    let td10 = document.createElement("td")
    let td11 = document.createElement("td")
    let td12 = document.createElement("td")

    tr3.appendChild(td9)
    tr3.appendChild(td10)
    tr3.appendChild(td11)
    tr3.appendChild(td12)

    td9.remove()
    td11.remove()

    let td13 = document.createElement("td")
    td13.setAttribute("colspan", "2")
    let td14 = document.createElement("td")
    let td15 = document.createElement("td")
    let td16 = document.createElement("td")

    tr4.appendChild(td13)
    tr4.appendChild(td14)
    tr4.appendChild(td15)
    tr4.appendChild(td16)

    td14.remove()

    return t1
}

function innertable2() {
    let t1 = document.createElement("table")
    b.append(t1)
    t1.setAttribute("border", "2px")
    t1.setAttribute("height", "200px")
    t1.setAttribute("width", "200px")
    t1.style.backgroundColor = "lightpink"

    let tr1 = document.createElement("tr")
    let tr2 = document.createElement("tr")
    let tr3 = document.createElement("tr")
    let tr4 = document.createElement("tr")
    let tr5 = document.createElement("tr")

    t1.appendChild(tr1)
    t1.appendChild(tr2)
    t1.appendChild(tr3)
    t1.appendChild(tr4)
    t1.appendChild(tr5)

    let td1 = document.createElement("td")
    td1.setAttribute("rowspan", "2")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    td3.setAttribute("rowspan", "2")
    let td4 = document.createElement("td")

    tr1.appendChild(td1)
    tr1.appendChild(td2)
    tr1.appendChild(td3)
    tr1.appendChild(td4)


    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    let td7 = document.createElement("td")
    let td8 = document.createElement("td")

    tr2.appendChild(td5)
    tr2.appendChild(td6)
    tr2.appendChild(td7)
    tr2.appendChild(td8)

    td5.remove()
    td7.remove()

    let td9 = document.createElement("td")
    td9.setAttribute("colspan", "4")
    let td10 = document.createElement("td")
    let td11 = document.createElement("td")
    let td12 = document.createElement("td")

    tr3.appendChild(td9)
    tr3.appendChild(td10)
    tr3.appendChild(td11)
    tr3.appendChild(td12)

    td10.remove()
    td11.remove()
    td12.remove()

    let td13 = document.createElement("td")
    let td14 = document.createElement("td")
    td14.setAttribute("rowspan", "2")
    let td15 = document.createElement("td")
    let td16 = document.createElement("td")
    td16.setAttribute("rowspan", "2")

    tr4.appendChild(td13)
    tr4.appendChild(td14)
    tr4.appendChild(td15)
    tr4.appendChild(td16)

    let td17 = document.createElement("td")
    let td18 = document.createElement("td")
    let td19 = document.createElement("td")
    let td20 = document.createElement("td")

    tr5.appendChild(td17)
    tr5.appendChild(td18)
    tr5.appendChild(td19)
    tr5.appendChild(td20)

    td18.remove()
    td19.remove()

    return t1
}

function innertable3() {
    let t1 = document.createElement("table")
    b.append(t1)
    t1.setAttribute("border", "2px")
    t1.setAttribute("height", "200px")
    t1.setAttribute("width", "200px")
    t1.style.backgroundColor = "lightblue"

    let tr1 = document.createElement("tr")
    let tr2 = document.createElement("tr")
    let tr3 = document.createElement("tr")
    let tr4 = document.createElement("tr")

    t1.appendChild(tr1)
    t1.appendChild(tr2)
    t1.appendChild(tr3)
    t1.appendChild(tr4)

    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")

    tr1.appendChild(td1)
    tr1.appendChild(td2)
    tr1.appendChild(td3)
    tr1.appendChild(td4)

    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    td6.setAttribute("rowspan", "2")
    td6.setAttribute("colspan", "2")
    let td7 = document.createElement("td")
    td7.setAttribute("rowspan", "2")
    let td8 = document.createElement("td")

    tr2.appendChild(td5)
    tr2.appendChild(td6)
    tr2.appendChild(td7)
    tr2.appendChild(td8)

    td7.remove()

    let td9 = document.createElement("td")
    let td10 = document.createElement("td")
    let td11 = document.createElement("td")
    let td12 = document.createElement("td")

    tr3.appendChild(td9)
    tr3.appendChild(td10)
    tr3.appendChild(td11)
    tr3.appendChild(td12)

    td10.remove()
    td11.remove()

    let td13 = document.createElement("td")
    let td14 = document.createElement("td")
    let td15 = document.createElement("td")
    let td16 = document.createElement("td")

    tr4.appendChild(td13)
    tr4.appendChild(td14)
    tr4.appendChild(td15)
    tr4.appendChild(td16)

    return t1
}

function innertable4() {
    let t1 = document.createElement("table")
    b.append(t1)
    t1.setAttribute("border", "2px")
    t1.setAttribute("height", "200px")
    t1.setAttribute("width", "200px")
    t1.style.backgroundColor = "lightgreen"

    let tr1 = document.createElement("tr")
    let tr2 = document.createElement("tr")
    let tr3 = document.createElement("tr")
    let tr4 = document.createElement("tr")

    t1.appendChild(tr1)
    t1.appendChild(tr2)
    t1.appendChild(tr3)
    t1.appendChild(tr4)

    let td1 = document.createElement("td")
    td1.setAttribute("rowspan", "4")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    td3.setAttribute("rowspan", "4")
    let td4 = document.createElement("td")

    tr1.appendChild(td1)
    tr1.appendChild(td2)
    tr1.appendChild(td3)
    tr1.appendChild(td4)

    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    let td7 = document.createElement("td")
    let td8 = document.createElement("td")

    tr2.appendChild(td5)
    tr2.appendChild(td6)
    tr2.appendChild(td7)
    tr2.appendChild(td8)

    td5.remove()
    td7.remove()

    let td9 = document.createElement("td")
    let td10 = document.createElement("td")
    let td11 = document.createElement("td")
    let td12 = document.createElement("td")

    tr3.appendChild(td9)
    tr3.appendChild(td10)
    tr3.appendChild(td11)
    tr3.appendChild(td12)

    td9.remove()
    td11.remove()

    let td13 = document.createElement("td")
    let td14 = document.createElement("td")
    let td15 = document.createElement("td")
    let td16 = document.createElement("td")

    tr4.appendChild(td13)
    tr4.appendChild(td14)
    tr4.appendChild(td15)
    tr4.appendChild(td16)

    td13.remove()
    td15.remove()

    return t1
}

function innertable5() {
    let t1 = document.createElement("table")
    b.append(t1)
    t1.setAttribute("border", "2px")
    t1.setAttribute("height", "200px")
    t1.setAttribute("width", "200px")
    t1.style.backgroundColor = "yellow"

    let tr1 = document.createElement("tr")
    let tr2 = document.createElement("tr")
    let tr3 = document.createElement("tr")

    t1.appendChild(tr1)
    t1.appendChild(tr2)
    t1.appendChild(tr3)

    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")

    tr1.appendChild(td1)
    tr1.appendChild(td2)
    tr1.appendChild(td3)

    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")

    tr2.appendChild(td4)
    tr2.appendChild(td5)
    tr2.appendChild(td6)

    let td7 = document.createElement("td")
    let td8 = document.createElement("td")
    let td9 = document.createElement("td")

    tr3.appendChild(td7)
    tr3.appendChild(td8)
    tr3.appendChild(td9)

    return t1
}

function innertable6() {
    let t1 = document.createElement("table")
    b.append(t1)
    t1.setAttribute("border", "2px")
    t1.setAttribute("height", "200px")
    t1.setAttribute("width", "200px")
    t1.style.backgroundColor = "lightpink"

    let tr1 = document.createElement("tr")
    let tr2 = document.createElement("tr")
    let tr3 = document.createElement("tr")

    t1.appendChild(tr1)
    t1.appendChild(tr2)
    t1.appendChild(tr3)

    let td1 = document.createElement("td")
    td1.setAttribute("rowspan", "3")
    let td2 = document.createElement("td")
    td2.setAttribute("colspan", "2")
    let td3 = document.createElement("td")

    tr1.appendChild(td1)
    tr1.appendChild(td2)
    tr1.appendChild(td3)

    td3.remove()

    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    td6.setAttribute("rowspan", "2")

    tr2.appendChild(td4)
    tr2.appendChild(td5)
    tr2.appendChild(td6)

    td4.remove()

    let td7 = document.createElement("td")
    let td8 = document.createElement("td")
    let td9 = document.createElement("td")

    tr3.appendChild(td7)
    tr3.appendChild(td8)
    tr3.appendChild(td9)

    td7.remove()
    td9.remove()

    return t1
}

function innertable7() {
    let t1 = document.createElement("table")
    b.append(t1)
    t1.setAttribute("border", "2px")
    t1.setAttribute("height", "200px")
    t1.setAttribute("width", "200px")
    t1.style.backgroundColor = "lightgreen"

    let tr1 = document.createElement("tr")
    let tr2 = document.createElement("tr")
    let tr3 = document.createElement("tr")

    t1.appendChild(tr1)
    t1.appendChild(tr2)
    t1.appendChild(tr3)

    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    td2.setAttribute("colspan", "2")
    td2.setAttribute("rowspan", "2")
    let td3 = document.createElement("td")
    td3.setAttribute("rowspan", "2")

    tr1.appendChild(td1)
    tr1.appendChild(td2)
    tr1.appendChild(td3)

    td3.remove()

    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")

    tr2.appendChild(td4)
    tr2.appendChild(td5)
    tr2.appendChild(td6)

    td5.remove()
    td6.remove()

    let td7 = document.createElement("td")
    let td8 = document.createElement("td")
    let td9 = document.createElement("td")

    tr3.appendChild(td7)
    tr3.appendChild(td8)
    tr3.appendChild(td9)

    return t1
}

function innertable8() {
    let t1 = document.createElement("table")
    b.append(t1)
    t1.setAttribute("border", "2px")
    t1.setAttribute("height", "200px")
    t1.setAttribute("width", "200px")
    t1.style.backgroundColor = "hotpink"

    let tr1 = document.createElement("tr")
    let tr2 = document.createElement("tr")
    let tr3 = document.createElement("tr")

    t1.appendChild(tr1)
    t1.appendChild(tr2)
    t1.appendChild(tr3)

    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    td2.setAttribute("rowspan", "2")
    let td3 = document.createElement("td")

    tr1.appendChild(td1)
    tr1.appendChild(td2)
    tr1.appendChild(td3)

    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")

    tr2.appendChild(td4)
    tr2.appendChild(td5)
    tr2.appendChild(td6)

    td5.remove()

    let td7 = document.createElement("td")
    td7.setAttribute("colspan", "3")
    let td8 = document.createElement("td")
    let td9 = document.createElement("td")

    tr3.appendChild(td7)
    tr3.appendChild(td8)
    tr3.appendChild(td9)

    td8.remove()
    td9.remove()

    return t1
}