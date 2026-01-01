console.log(window);
console.log(window.navigator.onLine);
let h = document.getElementById("d1");
if(window.navigator.onLine){
    h.innerText = "You are online";
}else{
    h.innerText = "You are offline";
}


// Current Location
let cr = document.getElementById("cr");
cr.addEventListener("click", ()=>{
    console.log(window.navigator.geolocation.getCurrentPosition((position)=>{;
let lat = position.coords.latitude;
let long = position.coords.longitude;
let m = `https://www.google.com/maps/place/${lat},${long}`;
         console.log(m);
         window.location.href = m;
    }));
});

// Search
let se = document.getElementById("se");
let d2 = document.getElementById("d2");
se.addEventListener("click", ()=>{
    let query = d2.value;
    let url = `https://www.google.com/search?q=${d2.value}`;
    window.open(url, "_blank");
    console.log(m);
    
});

// Share
let sh = document.getElementById("sh");
sh.addEventListener("click", ()=>{
    console.log(window.navigator.mediaDevices.getDisplayMedia());
});

// Open Camera
let cam = document.getElementById("cam");
let video = document.querySelector("video");
cam.addEventListener("click",  ()=>{
    console.log(window.navigator.mediaDevices.getUserMedia
        ({audio:true,video:true})
    .then((stream)=>{
        video.srcObject = stream;
    })
)

})