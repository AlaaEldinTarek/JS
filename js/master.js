// Select Landing Page element 
let land=document.querySelector(".landing-page");

// Get Arrey Of Imgs
let imgsArry=["1.jpg","2.jpg","3.jpg","4.jpg"]


setInterval(() =>{
    // Get Random Number
let randNum = Math.floor(Math.random()*imgsArry.length);

// Change Background Imgs Url 
land.style.backgroundImage = 'url("/imgs/'+imgsArry[randNum]+'")';

}, 10000);