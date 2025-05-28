const minNum = 1;
const maxNum = 100;

const randomNo = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;


while(running){
   guess = window.prompt(`Enter a random no between ${minNum} & ${maxNum}`);
   guess = Number(guess);

   if(isNaN(guess)){
    window.alert("Please enter a valid no");
   }
   else if(guess < minNum || guess > maxNum){
    window.alert("Please enter a valid no");
   }
   else{
    attempts++;
    if(guess < randomNo){
    window.alert("Too Low! Try again 😢");
    }
    else if(guess > randomNo){
    window.alert("Too High! Try again ✊")
    }
    else{
    window.alert(`Correct!👏 The answer was ${randomNo}. You guessed it in ${attempts} attempts`);
    running = false;
    }
   }
}

