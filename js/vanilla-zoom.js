


const myButton = document.querySelector('button')
console.log(myButton);

myButton.style.background = "blue"

myButton.classList.toggle('clicked')



const HeroText = document.querySelector(".hero-text");
console.log(HeroText);
 
HeroText.style.fontSize = "8rem";

HeroText.style.color = "black";



// ==================== Random Colors 

const buttonColor = document.querySelector('.changeColor');
const wrapper = document.querySelector('.colorWrapper');
buttonColor.addEventListener('click', () => {
  wrapper.style.backgroundColor = colors();
});

function colors() {
  let colorArray = [];    
  for(let i =0; i < 3 ; i++){
    colorArray.push(Math.floor(Math.random() * (255 - 0) + 0));
  }
  // rgb -> hex
  let color = colorArray
    .map( x => x.toString(16))
    .join('');

  return `#${color}`;
}
// //=========== Changes width of the element
$("#MySkills").width("1300px");

//=========== Replace HTML content
$("#ReplaceMe").html("I've been replaced!");

// add content before p 
$("#contactMe p").before("For any projects you have, please");



// ==================== Modal

const modalButton = document.querySelector('.jsModalButton')
const modalCloseButton = document.querySelector('.jsModalClose')
const modalOverlay = document.querySelector('.modal-overlay')

modalButton.addEventListener('click', event => {
  document.body.classList.add('modal-is-open')
})

modalCloseButton.addEventListener('click', event => {
  document.body.classList.remove('modal-is-open')
})

modalOverlay.addEventListener('click', event => {
  if (!event.target.closest('.modal')) {
    document.body.classList.remove('modal-is-open')
  }
})

