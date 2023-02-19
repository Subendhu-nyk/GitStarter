// CreateElement
let newDiv = document.createElement("div");
newDiv.className = "Hello";
newDiv.id = "hello1";
console.log(newDiv);
//SetAttribute
newDiv.setAttribute("title", "HELLO");

//CreatTextNode
let newDivText = document.createTextNode("HELLO");
// Add Text To Div (AppendChild)
newDiv.appendChild(newDivText);

//Insert newDiv in HTML
let container = document.querySelector("header .container");
let h1 = document.querySelector("header h1");
container.insertBefore(newDiv, h1);

let newDiv1 = document.createElement("div");
newDiv1.className = "Hello";
newDiv1.id = "hello1";
console.log(newDiv1);
//SetAttribute
newDiv1.setAttribute("title", "HELLO");

//CreatTextNode
let newDiv1Text = document.createTextNode("HELLO");
// Add Text To Div (AppendChild)
newDiv1.appendChild(newDiv1Text);
let divId = document.querySelector("div #main");
let h2 = document.querySelector("div h2");
console.log(h2);
divId.insertBefore(newDiv1, h2);