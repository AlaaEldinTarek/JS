// creat heading Div
let headingDiv = document.createElement(`div`);
headingDiv.className="head";
document.body.appendChild(headingDiv);

// CSS heading div
headingDiv.style = " display:flex; padding:20px; justify-content:space-between; align-item:center;"
// add appendchild logo heading
let logo = document.createElement(`div`);
logo.className="logo";
headingDiv.appendChild(logo);
logo.innerHTML = "Elzero";
logo.style.cssText = "font-weight: bold; color:green; font-size:20px; margin:0px;"
// add appendchild UL heading
let arr = ['Home','About','Servise','contact'];
let menu = document.createElement(`ul`);
menu.className="menu";
headingDiv.appendChild(menu);
menu.style="padding:0px; margin:0px; display:flex; list-style:none;"

for(i=0; i<=arr.length - 1; i++) {
    let li = document.createElement('li'); 

    li.innerHTML=arr[i];
    li.style="padding:0px 5px; color:#777;"
    menu.appendChild(li);
}
// creat container boxs Div
let container = document.createElement(`div`);
container.className="cont";
container.style="background-color:#777; display:flex; padding:20px; flex-wrap:wrap; justify-content:space-between; gap:20px min-height calc(100vh-142px); box-sizing:border-box; "
document.body.appendChild(container);

// creat boxs Div

for(i=0; i<15; i++) {
    let boxs = document.createElement(`div`);
    boxs.className="product";
    boxs.style="padding:20px; gap:20px, 20px; background-color:rgb(255,255,255); border:1px solid rgb(221,211,211); width: calc((100% - 40px)/3); box-sizing:border-box; text-align:center; color:rgb(136,136,136); border-radius:6px;"
    container.appendChild(boxs);
    let span=document.createElement(`span`);
    span.style="font-size:40px; color:black; font-weight:Bold; display:block; margin-bottom:10px; margin-top:10px;"
    span.innerText=(`${i+1}`)
    boxs.appendChild(span);
    let boxsText=document.createTextNode("Product");
    boxs.appendChild(boxsText);
}
// creat Footer Div
let footerDiv = document.createElement(`div`);
footerDiv.className="foot";
document.body.appendChild(footerDiv);
let footerText=document.createTextNode("Copyright 2022");
footerDiv.appendChild(footerText);
// CSS heading div
footerDiv.style = " background-color:green; text-align:center; color:white; height:30px;  padding:20px; font-size:30px"
