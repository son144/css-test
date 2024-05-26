// Generate a random number between 1 and 20
// const randomNumber = Math.floor(Math.random() * 20) + 1;
// let modeBtn=document.querySelector(".mode")
// let container=document.querySelector(".container")

// let currentMode="light"


// function checkGuess() {
//     const guess = parseInt(document.getElementById('guess').value);
//     const message = document.getElementById('message');

//     if (guess === randomNumber) {
//         message.textContent = "Congratulations! You won the game!";
//     } else if (guess < randomNumber) {
//         message.textContent = "Too low. Try again!";
//     } else {
//         message.textContent = "Too high. Try again!";
//     }
// }
// let modeHandler=()=>{
// if(currentMode==="light"){
//     currentMode="dark"
//     container.style.backgroundColor="black"

// }else{
//     currentMode="light"
//     container.style.backgroundColor="white"
// }
// }
// modeBtn.addEventListener("click",modeHandler)


try {
    console.log('Try block');
    throw new Error('This is an error message');
  } catch (error) {
    console.error('Catch block:', error.message);
  } finally {
    console.log('Finally block');
  }
  