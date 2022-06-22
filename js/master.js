// Check If There's local Storage Color Option
let mainColor = localStorage.getItem("color_option");

if (mainColor !== null) {
    document.documentElement.style.setProperty('--maincolor', mainColor);


    // Remove Active class From ALL Colors List Item 
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");
            
            // Add Active Class On Element With Data-colors === Local Storage Item
            if (element.dataset.color === mainColor ) {

                // Add Class Active
                element.classList.add("active");
            }
            
    });
};

// Random Background Option
let backgroundOption = true;

// Variable To Control The Interval
let bgTheInt;

// Check If There's Local Storage Random Background Item
let bgLocalItem = localStorage.getItem("bg_option");

if (bgLocalItem !== null) {
    
    console.log("not embty");

    if (bgLocalItem === 'true') {
        bgLocalItem = true;
    }else {
        bgLocalItem = false;
    };
        
    // Remove Active Class From All 
    document.querySelectorAll(".random-background span").forEach(element => {
        element.classList.remove("active");
    });
    if (bgLocalItem === 'true') {
        document.querySelector(".random-background .yes").classList.add("active");
        
    } else {
        document.querySelector(".random-background .no").classList.add("active");
        
    }
}

// Toggle Spin Class On Icon
document.querySelector(".spain-seting .sett" ).onclick = function (){
    
    // Toggle Class Fa-spin For Rotation On Self
    this.classList.toggle("fa-spin");

    // Toggle Class Open On Main  Setting Box
    document.querySelector(".setting-box").classList.toggle("open");

    
}
// Close Setting box After Mouse Leaveing
document.querySelector(".setting-box").onmouseleave = function () {
    document.querySelector(".setting-box").classList.remove("open");
    document.querySelector(".sett").classList.remove("fa-spin");
}


// Switch Colors 
const Colorsli = document.querySelectorAll(".colors-list li");

// Loop On All Li
Colorsli.forEach(li => {

    // Click On event List Items
    li.addEventListener("click", (e) => {

        // Set Color On Root
        document.documentElement.style.setProperty('--maincolor', e.target.dataset.color);

        // Set Color On Local Storage
        localStorage.setItem("color_option", e.target.dataset.color);

        // Remove Active Class From All Childrens
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });

        // Add Active Class On Self 
        e.target.classList.add("active");

    })
})

// Switch Background Option 
const randBackEle = document.querySelectorAll(".random-background span");

// Loop On All spans
randBackEle.forEach(span => {

    // Click On event span
    span.addEventListener("click", (e) => {

        // Remove Active Class From All Childrens
        e.target.parentElement.querySelectorAll(".active").forEach(element => {

            element.classList.remove("active");

        });

        // Add Active Class On Self 
        e.target.classList.add("active");

        if (e.target.dataset.background === 'yes') {
            backgroundOption = true;
            newhh();
            localStorage.setItem("bg_option",true);
            
        }else {
            backgroundOption = false;
            localStorage.setItem("bg_option",false);
        
        }
        

    })
})

// Select Landing Page element 
let land=document.querySelector(".landing-page");

// Get Arrey Of Imgs
let imgsArry=["1.jpg","2.jpg","3.jpg","4.jpg"]



// Function Randomize Imgs 
function newhh() {
    if (backgroundOption === true) {
        bgTheInt = setInterval(() => {
            // Get Random Number
        let randNum = Math.floor(Math.random() * imgsArry.length);
        
        // Change Background Imgs Url 
        land.style.backgroundImage = 'url("/imgs/' + imgsArry[randNum]+'")';
        
        }, 10000);
    }
    
    
}
newhh();


// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

    //Skills Offset Top
    let skillsOffTop = ourSkills.offsetTop ;

    // Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;

    // Window height 
    let windowHeight = this.innerHeight;

    // Window Scroll Top
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOuterHeight + skillsOffTop - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        })
    }

}