let range = 10;
let min = Math.floor(Math.random() * range) + 1;
let max = min + range;
// let winningNum = getRandomNumber(min,max);
let winningNum = Math.floor(Math.random() * (max - min + 1) + min) + 1;
let guessLeft = 5;
let average = (min + max)/2;
console.log(winningNum)

const maxNum = document.querySelector("#maxNum"),
     minNum = document.querySelector("#minNum"),
     guess = document.querySelector("#user_input"),
     submitBtn = document.querySelector("#Submit"),
     chances = document.querySelector("#chances"),
     threshold = 1,
     message = document.querySelector("#message"),
     content = document.querySelector("#content"),
     playAgain = document.querySelector(".Play_Again");

     

maxNum.textContent = max;
minNum.textContent = min;
chances.textContent = guessLeft;

submitBtn.onclick = function(e){

   content.onmousedown = function(e) {
    if (e.target.className === "Play_Again") {
        window.location.reload();
    }
}

    

    let guessNum = Number(guess.value);

    if(isNaN(guessNum) || guessNum > max || guessNum < min){
        setMessage(`Please enter a number between ${min} and ${max}` , "white" , "orange" , "1em", "2px 2px 2px gray");
    }
    else if(guessNum === winningNum){
        guess.disabled = true;
        guess.style.borderColor = "rgb(21, 212, 15)";
        submitBtn.style.borderColor = "rgb(21, 212, 15)";
        setMessage("You won!!", "white", "rgb(21, 212, 15)" , "1em");
        submitBtn.textContent = "Play Again";
        submitBtn.className += "Play_Again";
    }
    else {
        guessLeft -= 1;
        chances.innerHTML = ` ${guessLeft}`
    
        if(guessLeft === 0){
        guess.disabled = true;
        guess.style.borderColor = "red";
        // submitBtn.disabled = true;
        setMessage(`You lose!! the right answer is , ${winningNum}`, "white", "red" , "1em");
        submitBtn.textContent = "Play Again";
        submitBtn.className += "Play_Again";
    }
    else if (Math.abs(guessNum - winningNum) <= threshold) {
        setMessage("Close!!", "white", "rgb(21, 212, 15)" , "1em");
        console.log("Close!");
    }
    else if(guessNum > average && guessNum > winningNum){
        setMessage(`Too high, try reducing your guess range ^_^` , "white" , "orange" , "1em");
        console.log("too high");
    }
    else if(guessNum < average && guessNum < winningNum){
        setMessage(`Too low, try increasing your guess range ^_^` , "white" , "orange" , "1em");
        console.log("too low");
    }
    
    else{
        setMessage(`Wrong number, Try again` , "white" , "red" , "1em", "2px 2px 2px gray");
    }
    // setTimeout(setMessage(msg, color, background, padding) , 3000);

    // console.log(guess.value , typeof guessNum);    
}
    e.preventDefault();

}

function setMessage(msg, color, background, padding){
    message.style.background = background;
    message.style.padding = padding;
    message.style.color = color;
    message.textContent = msg;
    // message.style.display = 'block';
}

