// function button(){
//     // hide the screen
//     const homeSection=document.getElementById('home-section')
//     homeSection.classList.add('hidden')


//     const playGroundSection=document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
// // console.log(playGroundSection.classList)
// }
function handleKeybordKeyUpEvent(event){
    const playerPressed = event.key;
    console.log( 'player pressed', playerPressed)

    // stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }



console.log(playerPressed);

const currentAlphabetElement=document.getElementById('current-alphabet')
const currentAlphabet=currentAlphabetElement.innerText;
const expectedAlphabet =currentAlphabet.toLowerCase();
console.log(playerPressed,expectedAlphabet);

if (playerPressed === expectedAlphabet)
{

    console.log('Great');
    const currentScoreElement=document.getElementById('current-score');
    const currentScoreText=currentScoreElement.innerText;
    const currentScore=parseInt(currentScoreText);
    console.log(currentScore);
    
    const newScore=currentScore+1;
    // console.log(newScore);
     currentScoreElement.innerText=newScore;

    continueGame();
    removeBackgroundColorById(expectedAlphabet);
    
}
else{
    console.log('You missed.')

    const currentLifeElenment=document.getElementById('current-life');
    const currentLifeText=currentLifeElenment.innerText;
    const currentLife=parseInt(currentLifeText);

    const newLife=currentLife -1;

    currentLifeElenment.innerText=newLife;

    
if(newLife===0){
    gameOver('');
    }
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
    hideElementById('final-score');
    showElementById('play-ground');

    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);

    continueGame()
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    
    const lastScore=getTextElementValueById('current-score');
    // console.log(lastScore);
    setTextElementValueById('last-score',lastScore);

    
}
