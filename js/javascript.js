//- Change the color of an element using .style
////////////////////////////////////////////////////////////////////////////////////////////////////////

const elementColor = document.querySelector('.hero-text')
elementColor.style.color = "#ffffff"


//- Change the font size of an element using .setProperty
///////////////////////////////////////////////////////////////////////////////////////////////////////////


const heroSize = document.getElementById("changeSize")
heroSize.style.setProperty('font-size', '10em')



//- Add a class to an HTML tag with .setAttribute, and change some property with that class.
/////////////////////////////////////////////////////////////////////////////////////////////////////

const sectionSelection = document.querySelector("#SectionClass")
console.log(sectionSelection)
sectionSelection.setAttribute('class', 'headerStyle')
sectionSelection.style.setProperty('font-family', 'Prompt')
sectionSelection.style.setProperty('color','blue')




//- Create an empty paragraph and add some content with Javascript.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const NewParagraphStyle = document.querySelector("#emptyPG")
console.log(NewParagraphStyle)
NewParagraphStyle.innerHTML = " My passion is design and fashion. Ever since I was a little girl I looked up to the women role models in my life and how they grew into the person they were proud of, through fashion. Amazed by that instant confidence boost, I began studying Advertising and Marketing as a way to channel that confidence transformation into brands that make people feel beautiful and belong."

NewParagraphStyle.style.setProperty('font-family', 'Prompt');
NewParagraphStyle.style.setProperty('font-weight', '200');


//- Create an array and display the content on the page.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Declare an array object for our array of images
let arrayOfImages = [];

// Push the URLs to three images to arrayOfImages
arrayOfImages.push('img/aboutme-1.png');
arrayOfImages.push('img/aboutme-2.png');
arrayOfImages.push('img/aboutme-3.png');

// Output arrayOfImages to the console
console.log(arrayOfImages);



//- Create a button and add an event that adds some content at the beginning of a paragraph.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$("#jqPrepend").prepend("Coded by Sophia V. ");


//- Create a button and add an event listener to change the background of a section or div.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const colorDiv = document.querySelector('#colorDiv')
console.log(colorDiv)
colorDiv.addEventListener('click', function () {
    colorDiv.classList.toggle('clicked');
})


//- Replace the HTML content on a paragraph.
$("#ReplaceMe").html("A creative for the girls.");


// Leaflet map

var map = L.map('map').setView([43.7193868, 2.7938211], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([43.7193868, 2.7938211]).addTo(map)
    .bindPopup('Musée Matisse')
    .openPopup();

    var circle = L.circle([43.7193868, 2.7938211], {
        color: '#1A62A3',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 100
    }).addTo(map);
