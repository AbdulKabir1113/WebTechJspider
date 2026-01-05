// get
// set
// remove
// clear

// local storage
// set
window.localStorage.setItem("name","kabir")
window.localStorage.setItem("id","123")
window.localStorage.setItem("sal","10k")

// get

let s = window.localStorage.getItem("name")
console.log(s);

// remove

window.localStorage.removeItem("name")
window.localStorage.removeItem("id")

//clr
window.localStorage.clear()


// session storage
window.sessionStorage.setItem("name","kabir")
window.sessionStorage.setItem("id","123")
window.sessionStorage.setItem("sal","10k")

// get

let s1 = window.sessionStorage.getItem("name")
console.log(s1);

// remove

window.sessionStorage.removeItem("name")
window.sessionStorage.removeItem("id")

//clr
window.sessionStorage.clear()