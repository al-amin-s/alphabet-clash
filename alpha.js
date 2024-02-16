// function button(){
//     // hide the screen
//     const homeSection=document.getElementById('home-section')
//     homeSection.classList.add('hidden')


//     const playGroundSection=document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
// // console.log(playGroundSection.classList)
// }
function handleKeybordKeyUpEvent(event){
const playerPressed=event.key;
console.log(playerPressed);

const currentAlphabetElement=document.getElementById('current-alphabet')
const currentAlphabet=currentAlphabetElement.innerText;
const expectedAlphabet =currentAlphabet.toLowerCase();
console.log(playerPressed,expectedAlphabet);

if (playerPressed === expectedAlphabet)
{
    console.log('Great');
    continueGame();
    removeBackgroundColorById(expectedAlphabet);
    
}
else{
    console.log('You missed.')
}
}

document.addEventListener('keyup',handleKeybordKeyUpEvent)



function continueGame(){
const alphabet=getARandomAlphabet();
console.log('your',alphabet);


const currentAlphabetElement=document.getElementById('current-alphabet');
currentAlphabetElement.innerText=alphabet;

setBackgroundColorById(alphabet);


}

function play(){
    hideElementById('home-section');
    showElementById('play-ground')
    continueGame()
}
