$(document).ready(function(){
  if (jQuery) {  
    // jQuery is loaded  
    alert("Yeah!");
  } else {
    // jQuery is not loaded
    alert("Doesn't Work");
  }
});

const ColorButton = document.querySelector('#bg')
console.log(ColorButton);

ColorButton.style.background = radial-gradient(circle, rgba(148,187,233,1), 100% , rgba(238,174,202,1),0%);

ColorButton.classList.toggle('clicked')
