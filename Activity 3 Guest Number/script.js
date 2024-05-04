const randmomNumber = Math.floor(Math.random()*100) +1;
    let attempts = 0;

    function cheeckGuess(){
        const guess = parseInt(document.getElementById("guess-input").value);

        if(isNaN(guess) || guess < 1 || guess > 100){
            setMessage('Please enter a valid number between 1 and 100', 'red');
            return;
        }
        attempts ++;

        if (guess === randmomNumber) {
            setMessage(`Congratulations! you guessed the correct number ${randmomNumber} in ${attempts} attempts`, 'green');
            disableInputAndButton();
        }
        else if(guess < randmomNumber){
                setMessage('Too low, try again.', '#000000');
        }
        else{
            setMessage('To high, try agin.', '#000000');
        }

    }

    function setMessage(message, color){
      document.getElementById('message').textContent = message;
            document.getElementById('message').style.color = color;
    }

      function disableInputAndButton() {
            document.getElementById('guess-input').disabled = true;
            document.querySelector('button').disabled = true;
        }
