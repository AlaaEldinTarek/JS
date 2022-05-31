// creat heading Div
let headingDiv = document.createElement(`div`);
headingDiv.className="head";
console.log(headingDiv);
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
container.style="display:flex; padding:20px; flex-warp:warp; justify-content:space-between; gap:20px min-height calc(100vh-142px); box-sizing:border-box; "
document.body.appendChild(container);