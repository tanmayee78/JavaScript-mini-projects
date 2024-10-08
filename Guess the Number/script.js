const userInput = document.querySelector('.user-input');
const form = document.querySelector('form');
const result = document.querySelector('.result');
const allGuesses = document.querySelector('.all-guesses');
const submitBtn = document.querySelector('.btn-1');
const startBtn = document.querySelector('.btn-2');

function a() {
    const allGuessesArray = [];

let randomNumber = Math.round(Math.random() * 100);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInputValue = parseInt(userInput.value);
    if(userInputValue < randomNumber){
        result.innerText = "Too Low!";
    }else if(userInputValue > randomNumber){
        result.innerText = "Too High!";
    }else{
        result.innerText = "You got it. Congrats!";
        startBtn.disabled = false;
        submitBtn.disabled = true;
    }
    
    allGuessesArray.push(userInputValue);
    allGuesses.innerText = 'Your Guesses : ' + allGuessesArray.join(', ');
    form.reset();
})

startBtn.addEventListener('click', () => {
    result.innerText = '';
    allGuesses.innerText = '';
    submitBtn.disabled = false;
    startBtn.disabled = true;
    randomNumber = Math.round(Math.random() * 100);

})
}

a();