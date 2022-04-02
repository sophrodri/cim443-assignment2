/* Events - When a user hits the buttom. We need to register when an event happens, 
so to do that, you add an Event Listener */

// MODALs
    // Create a constant that locates the first button 
    const button = document.querySelector('button')
    const body = document.body

    body.classList.toggle("offsite-is-open")


// for Modal - You remove the opacity in the css 
    // z-index: behind the content, and the element is transparent 
         // select the bottom that has the class "jsModalButton" with query selector 
         // create a const that selects modal close button 
         // hiding and showing (add / remove on css) is what is doing the work, js is just telling it what to do. 

   modalClassButton.addEventListener ('click', event => {document.body.classList.remove()})

//libraies and frameworks 
    // for libraries: decide what things from the library you can use, the whole structure of your site does not depend on framework 
      // An example of a JS library - JQuery and React 
        //Jquery - write less, do more. Think of Lego sets that have instructions, and you can build in different ways
    // for frameworks: you decide the structure that cannot be changed.
        // you have to work within the framework's boundaries. 