let button    = document.querySelector('#button')
let quote      = document.querySelector('#quote')
let character      = document.querySelector('#character')
let image      = document.querySelector('#image')



function getInfoFetch(){

  fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(response => response.json())
    .then((data) => {

      let source = data[0].image

      quote.innerText = '"' + data[0].quote + '"';
      character.innerText = '-' + data[0].character;

      document.getElementById('image').src = source;


    })
    .catch(err => console.log(err));
}



button.addEventListener('click', getInfoFetch)
