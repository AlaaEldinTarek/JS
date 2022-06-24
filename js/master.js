// Fanctions

//Select All bullets 
const allBullet = document.querySelectorAll(".nav-bulits .bullet");


//Select All Links 
const allLinks = document.querySelectorAll(".links a");


function ScrollTO(elements) {
    elements.forEach(ele => {

        ele.addEventListener('click',(e) => {
    
            e.preventDefault();
    
            document.querySelector(e.target.dataset.section).scrollIntoView ( {
    
    
                behavior:'smooth'
            });
        });
    } );
};

ScrollTO(allBullet);
ScrollTO(allLinks);


// Handel Active State 
function handleActive(ha) {
    
     // Remove Active Class From All Childrens
    ha.target.parentElement.querySelectorAll(".active").forEach(element => {


        element.classList.remove("active");
    });

    // Add Active Class On Self 
    ha.target.classList.add("active");

};



// Select Landing Page element 
let land=document.querySelector(".landing-page");

// Get Arrey Of Imgs
let imgsArry=["1.jpg","2.jpg","3.jpg","4.jpg"]


 // Variable To Control The Interval
 let bgTheInt;
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
};


// #################################################################################################

// #################################################################################################


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

// #################################################################################################

// Switch Colors 
const colorsLi = document.querySelectorAll(".colors-list li");
// Check If There's local Storage Color Option
let mainColor = localStorage.getItem("color_option");

if (mainColor !== null) {
    document.documentElement.style.setProperty('--maincolor', mainColor);
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");
        if (element.dataset.color === mainColor) {
            element.classList.add("active");
        };
    });
};
colorsLi.forEach(li => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty('--maincolor', e.target.dataset.color);
    
     // Set Color On Loacl Storage 
    localStorage.setItem("color_option",  e.target.dataset.color);
    
    handleActive(e);
    });
    
}); 

// #################################################################################################


// Random Background Option
let backgroundOption = true;

// Variable To Select All span
let ranBgSpan = document.querySelectorAll(".random-background span");

// Check If There's Local Storage Random Background Item
let bgLocalItem = localStorage.getItem("bg_option");

if (bgLocalItem !== null) {
    ranBgSpan.forEach(span => {
        span.classList.remove("active");
    });
    if (bgLocalItem === "true") {
        bgLocalItem = true;
        document.querySelector(".random-background .yes").classList.add("active");
    }else {
        bgLocalItem = false;
        document.querySelector(".random-background .no").classList.add("active");
    };
    console.log("not embty");

}else {
    // newhh();
}
// Loop On All spans
ranBgSpan.forEach(span => {
    // Click On event span
    span.addEventListener("click", (e) => {
        if (span.dataset.background === 'yes') {
            backgroundOption = true;
            newhh();
            localStorage.setItem("bg_option", "true");
        }else {
            backgroundOption = false;
            localStorage.setItem("bg_option", "false");
        };
        handleActive(e); 
    });
});


// #################################################################################################

// Bullets
let bulletsSpan = document.querySelectorAll(".bullets-option span");
let bulletsContainer = document.querySelector(".nav-bulits");
let bulletLocalItem = localStorage.getItem("bullets_option");
if (bulletLocalItem !== null) {
    bulletsSpan.forEach(span => {
        span.classList.remove("active");
    });
    if (bulletLocalItem === 'block') {
        bulletsContainer.style.display = 'block';
        document.querySelector(".bullets-option .yes").classList.add("active");
    } else {
        bulletsContainer.style.display = 'none';
        document.querySelector(".bullets-option .no").classList.add("active");
    }
    console.log("not embty");
}

bulletsSpan.forEach(span => {
    span.addEventListener("click", (e) => {
        if (span.dataset.display === 'show') {
            bulletsContainer.style.display = 'block';
            localStorage.setItem("bullets_option", 'block');
        } else {
            bulletsContainer.style.display = 'none';
            localStorage.setItem("bullets_option", 'none');
        }
        handleActive(e);
    });
})

// #################################################################################################


// Select Skills Selector
let ourSkills = document.querySelector(".skills");
 //Skills Offset Top
let skillsOffTop = ourSkills.offsetTop ;

 // Skills Outer Height
let skillsOuterHeight = ourSkills.offsetHeight;

 // Window height 
let windowHeight = window.innerHeight;

 // Window Scroll Top
let windowScrollTop = window.pageYOffset;


window.onscroll = function () {
    if (windowScrollTop > ( skillsOffTop + skillsOuterHeight - windowHeight)) {
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
    }
};


// #################################################################################################


//creat Popup With The Image 
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {

        //Creat overlay Element
        let overlay = document.createElement("div");

        // Add class To Overla
        overlay.className='popup-overlay';

        // Append Overlay To The Body
        document.body.appendChild(overlay);

        //Creat Popup
        let popupBox = document.createElement("div");
        
        // Add Class To Popup Box
        popupBox.className = 'popup-box';

        if (img.alt !== null) {

            // Creat Heading
            let imgHeading = document.createElement ("h3");

            // Create Text From Heading 
            let imgText = document.createTextNode(img.alt);
            
            // Append The Text To Heading
            imgHeading.appendChild(imgText);

            // Append The Text To The
            popupBox.appendChild(imgHeading);

        }

        // Creat The Image
        let popupImages = document.createElement("img");

        // Set Image Source
        popupImages.src= img.src ;

        // Add Iamge To Popup Box 
        popupBox.appendChild(popupImages);

        // Append The Popup Box To Bady 
        document.body.appendChild(popupBox);

        // Creat The Close span
        let closeButton = document.createElement("span");

        // Creat The Close Button 
        let closeButtonText = document.createTextNode("X");

        // Append Text To Close Button 
        closeButton.appendChild(closeButtonText);

        // Add class To close butoon 
        closeButton.className = 'close-button';

        // Add close Button To The Popup Box
        popupBox.appendChild(closeButton);
    })
})

// Close Popup 
document.addEventListener("click", function (e) {
    if (e.target.classList == 'close-button') {

        // Remove The Current Popup
        e.target.parentElement.remove();

        // Remove Overlay
        document.querySelector(".popup-overlay").remove();

    }
});

//  Reset Opthins
document.querySelector(".reset-opthions").onclick = function () {
    localStorage.clear();
    window.location.reload();
}

//  Toggle Menu
// let toggleLeBn =document.querySelector(".toggle-menu");
// let tLinks=document.querySelector(".links");
// toggleLeBn.onclick = function (e) {
//     e.stopPropagation();
    
// };
// tLinks.onclick = function (e) {
//     e.stopPropagation();
// };
// document.addEventListener("click", (e) => {
//     if (e.target !== toggleLeBn && e.target !== tLinks) {

//         if (tLinks.classList.contains("open")) {
//             toggleLeBn.classList.toggle("menu-active");
//             tLinks.classList.toggle("open");
            
//         }
//     }
// });


let toggleLeBn =document.querySelector(".toggle-menu");
let tLinks=document.querySelector(".links");

toggleLeBn.onclick = function (e){
    toggleLeBn.classList.toggle("menu-active");
    tLinks.classList.toggle("open");
    e.stopPropagation();
};
// Close Setting box After Mouse Leaveing
document.addEventListener("click", (e) => {
    if (e.target !== toggleLeBn && e.target !== tLinks) {
        toggleLeBn.classList.remove("menu-active");
        tLinks.classList.remove("open");
}
});

