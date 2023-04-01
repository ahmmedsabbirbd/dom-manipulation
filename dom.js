// create element
const p = document.createElement('p');

// set text
p.innerHTML = 'kadsf';

// get element and append p element
const dom = document.getElementById('dom');
dom.appendChild(p);

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.onload = function () {
    console.log(xhr.responseText);
};
xhr.send();