function rollDice(){
    
const userInput = Number(document.getElementById("userInput").value);
const resultNo = document.getElementById("resultNo");
const resultImages = document.getElementById("resultImages");

const value = [];
const images = [];

for(let i=0; i<userInput; i++){
let diceRoll;
diceRoll = Math.floor(Math.random()*6) + 1;
value.push(diceRoll);
images.push(`<img src="diceImages/${diceRoll}.png" alt="Dice ${diceRoll}">`);
}

resultNo.textContent = `dice: ${value.join(', ')}`;
resultImages.innerHTML = images.join(' ');

}

