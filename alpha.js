// function button(){
//     // hide the screen
//     const homeSection=document.getElementById('home-section')
//     homeSection.classList.add('hidden')


//     const playGroundSection=document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
// // console.log(playGroundSection.classList)
// }
function continueGame(){
const alphabet=getARandomAlphabet();
console.log('your',alphabet);


const currentAlphabetElement=document.getElementById('current-alphabet');
currentAlphabetElement.innerText=alphabet;

setBackgroundColoreById(alphabet);
}

function play(){
    hideElementById('home-section');
    showElementById('play-ground')
    continueGame()
}
