function generateRandomNumber(low, high) {
    const range = high - low + 1;
    const num = Math.floor(Math.random() * range) + low;
    return num;
}

const secret = generateRandomNumber(1, 100);
console.log(secret);

let numGuesses = 0;

// Your task:
function check() {

    const guess = Number (document.querySelector("#guess").value);
    const output = document.querySelector("#message");
    const numGuessesEl = document.querySelector("#num_guesses");

    if (guess > secret) { 
        output.innerHTML = "Too High"
    }

    if (guess < secret) { 
        output.innerHTML = "Too Low"
    }

    if (guess === secret) { 
        output.innerHTML = "You Win"
    }

    numGuesses = numGuesses +1;
    numGuessesEl.innerHTML = numGuesses;
}

