// html collection
// tag name select
let h1Item = document.getElementsByTagName('h1'); // select all h1 tags
console.log(h1Item);

// id select
let idSelect = document.getElementById('h1');
idSelect.innerHTML = 'DoM'
console.log(idSelect);

// classname select
// select all class
let classnameSelect = document.getElementsByClassName('list');
console.log(classnameSelect);

// query selector
// only select first element
// (******)  i use sbling.
// i use it (*****) id classname tag name  
let querySelector  = document.querySelector('li');
console.log(querySelector);

// query selector all 
// select all  element
// (******)  i use sbling.
// i use it (*****) id classname tag name  
let querySelectorAll = document.querySelectorAll('.list');
console.log(querySelectorAll);

let querySelectorFirst = document.querySelectorAll('li:first-child');
console.log("li:first-child==========>"+querySelectorFirst);
console.log(querySelectorFirst);