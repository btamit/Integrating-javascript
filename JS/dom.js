// console.log('Javascript from DOM');
// console.log(document);
const student = {
    name:'Abul Hasan',
    id: 14,
    study: function(time){
        // console.log(time,"He is studying");
    }
}

const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);
for(const li of liCollection){
    // console.log(li.innerText);
}

// Option 1: getElementsByTagName
const allHeadings = document.getElementsByTagName('h1');
for(const heading of allHeadings){
    // console.log(heading.innerText);
}

// Option 2: getElementsByClassName
const importantPlaces = document.getElementsByClassName('important-places');
for (const place of importantPlaces){
    // console.log(place.innerText);
}
// Option 3: getElementById
const fruit = document.getElementById('fruits-title');
fruit.innerText = 'Changed fruits title by javascript DOM';

// Option 4: querySelectorAll
// Option 5: querySelector will provide only first element
const someLi = document.querySelectorAll('.fruits-container li');
for(const li of someLi){
    // console.log(li.innerText);
}




























