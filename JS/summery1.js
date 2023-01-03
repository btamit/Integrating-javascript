console.log('I am summery1 js');
const secondList = document.getElementById('second-list');
console.log(secondList);

const li = document.createElement('li');
li.innerText = 'My dynamic item';
secondList.appendChild(li);

