
const section = document.getElementById('main-container');
section.style.backgroundColor = 'lightblue';
section.style.padding = '20px';
section.style.borderRadius = '40px';
const h1 = document.createElement('h1');
h1.innerText = 'This is heading';
section.appendChild(h1);

const ull = document.createElement('ul');
const li4 = document.createElement('li');
li4.innerText = 'Hello I am li 4';
ull.appendChild(li4);

const li5 = document.createElement('li');
li5.innerText = 'Hello I am li 5';
ull.appendChild(li5);

const li6 = document.createElement('li');
li6.innerText = 'Hello I am li 6';
ull.appendChild(li6);

const li7 = document.createElement('li');
li7.innerText = 'Hello I am li 7';
ull.appendChild(li7);

section.appendChild(ull);