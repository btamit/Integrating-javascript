console.log('Hello I am from append dot js');
const newPlace = document.getElementById('places-list');
const li = document.createElement('li');
li.innerText = 'I am new place';
newPlace.appendChild(li);

// const newArea = document.getElementById('main-container');
// const section = document.createElement('section');
// section.style.backgroundColor = 'blue';
// section.style.padding = '20px';
// section.style.textAlign = 'center';
// section.innerHTML =`
// <h1> Hello, I am Gonesh.</h1>
// <ul> 
//     <li> I am Omit </li>
//     <li> I am from Dinajpur</li>
//     <li> I am a programmer </li>
// </ul>
// `;
// newArea.appendChild(section)

// 1. Where to add
const mainContainer = document.getElementById('main-container');

// 2. what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText ='Birani'
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText ='Tehari'
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText ='Borhani'
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText ='Salad'
ul.appendChild(li4);

section.appendChild(ul);
mainContainer.appendChild(section);














