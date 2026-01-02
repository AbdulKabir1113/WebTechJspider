let gp = document.getElementById("gp")

gp.addEventListener("click", (e) => {
    // console.log(e);
    // console.log(e.target.id);
    // console.log(e.target.tagName);
    // console.log(e.clientX);
    // console.log(e.clientY);

    if (e.target.id == "gp") {
        console.log("Grand Parents Clicked");
        // e.target.style.backgroundColor = "red"
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        e.target.style.backgroundColor = `rgb(${r},${g},${b})`
    }
    else if (e.target.id == "par") {
        console.log("Parents Clicked");
        // e.target.style.backgroundColor = "green"
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        e.target.style.backgroundColor = `rgb(${r},${g},${b})`
    }
    else if (e.target.id == "ch") {
        console.log("Child Clicked");
        // e.target.style.backgroundColor = "blue"
        // let e = document.body
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        e.target.style.backgroundColor = `rgb(${r},${g},${b})`
    }
    else if (e.target.id == "par1") {
        console.log("Child Clicked");
        // e.target.style.backgroundColor = "blue"
        // let e = document.body
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        e.target.style.backgroundColor = `rgb(${r},${g},${b})`
    }
    else if (e.target.id == "ch1") {
        console.log("Child ch1 Clicked");
        // e.target.style.backgroundColor = "blue"
        // let e = document.body
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        e.target.style.backgroundColor = `rgb(${r},${g},${b})`
    }
    else if (e.target.id == "ch_ch") {
        console.log("Child ch_ch Clicked");
        // e.target.style.backgroundColor = "blue"
        // let e = document.body
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        e.target.style.backgroundColor = `rgb(${r},${g},${b})`
    }

})