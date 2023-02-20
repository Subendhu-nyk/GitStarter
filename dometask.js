// // CreateElement
// let newDiv = document.createElement("div");
// newDiv.className = "Hello";
// newDiv.id = "hello1";
// console.log(newDiv);
// //SetAttribute
// newDiv.setAttribute("title", "HELLO");

// //CreatTextNode
// let newDivText = document.createTextNode("HELLO");
// // Add Text To Div (AppendChild)
// newDiv.appendChild(newDivText);

// //Insert newDiv in HTML
// let container = document.querySelector("header .container");
// let h1 = document.querySelector("header h1");
// container.insertBefore(newDiv, h1);

// let newDiv1 = document.createElement("div");
// newDiv1.className = "Hello";
// newDiv1.id = "hello1";
// console.log(newDiv1);
// //SetAttribute
// newDiv1.setAttribute("title", "HELLO");

// //CreatTextNode
// let newDiv1Text = document.createTextNode("HELLO");
// // Add Text To Div (AppendChild)
// newDiv1.appendChild(newDiv1Text);
// let divId = document.querySelector("div #main");
// let h2 = document.querySelector("div h2");
// console.log(h2);
// divId.insertBefore(newDiv1, h2);


// Task 8
// var form = document.getElementById('addForm');
// var itemList = document.getElementById('items');
// var filter = document.getElementById('filter');

// // Form submit event
// form.addEventListener('submit', addItem);

// itemList.addEventListener('click', removeItem);

// filter.addEventListener('keyup', filterItems);


// function addItem(e){
//   e.preventDefault();


//   var newItem = document.getElementById('item').value;


//   var li = document.createElement('li');

//   li.className = 'list-group-item';

//   li.appendChild(document.createTextNode(newItem));


//   var deleteBtn = document.createElement('button');


//   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';


//   deleteBtn.appendChild(document.createTextNode('X'));


//   li.appendChild(deleteBtn);
//   itemList.appendChild(li);
//   var editBtn = document.createElement('button');


//   editBtn.className = 'btn btn-primary btn-sm float-right ';


//   editBtn.appendChild(document.createTextNode('Edit'));

//   li.appendChild(editBtn);  
// }
// function removeItem(e){
//   if(e.target.classList.contains('delete')){
//     if(confirm('Are You Sure?')){
//       var li = e.target.parentElement;
//       itemList.removeChild(li);
//     }
//   }
// }

// function filterItems(e){
  
//   var text = e.target.value.toLowerCase();

//   var items = itemList.getElementsByTagName('li');

//   Array.from(items).forEach(function(item){
//     var itemName = item.firstChild.textContent;
//     if(itemName.toLowerCase().indexOf(text) != -1){
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// }

// Task 9
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newDesc = document.getElementById('item2').value
  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(newDesc))
  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

    var editBtn = document.createElement('button');


  editBtn.className = 'btn btn-primary btn-sm float-right ';


  editBtn.appendChild(document.createTextNode('Edit'));

  li.appendChild(editBtn);  
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}