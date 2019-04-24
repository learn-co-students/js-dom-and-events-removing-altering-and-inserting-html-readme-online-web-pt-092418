//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
// append element to body to start:
let element = document.createElement('div')
element.innerHTML = 'Helllo, DOM!';
element.style.backgroundColor = "#f9f9f9";
document.body.appendChild(element);
element.style.textAlign = 'center';

// append elements to that element:
let ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

// element.appendChild(ul);
ul.style.textAlign = 'left';
Remove element from DOM
ul.removeChild(ul.querySelector('li:nth-child(2)'));	//remove li
ul.remove();		//remove entirel ul
