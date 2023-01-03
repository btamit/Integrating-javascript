const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '5px solid green';
    section.style.padding = '10px';
    section.style.margin = '5px';
    section.style.borderRadius = '10px';
    section.style.backgroundColor = 'lightgrey';
}

// const places = document.getElementById('places-container');
// places.style.color='red';
// places.style.backgroundColor='yellow';

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('yellow-bg');
placesContainer.classList.remove('large-text');