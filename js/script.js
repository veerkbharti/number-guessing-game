let mainBody = document.querySelector(".main-body"),
  titles = document.querySelectorAll(".title"),
  numberDisplayBoard = document.querySelector(".number"),
  inputField = document.querySelector(".input"),
  msg = document.querySelector(".msg"),
  scoreTitle = document.querySelector(".score"),
  statusTitle = document.querySelector(".status-title");
let score = 100;
let outputNumber = Math.floor(Math.random() * 10 + 1);

document.querySelector(".submit").addEventListener("click", function () {
  let geussedNumber = document.querySelector(".input").value;
  if (!geussedNumber == "") {
    if (outputNumber == geussedNumber) {
      mainBody.style.background = "url(celebration.gif)";
      titles.forEach((element) => {
        element.style.color = "white";
      });
      numberDisplayBoard.textContent = outputNumber;
      scoreTitle.innerHTML = `<b>High Score: </b>${score}`;
      scoreTitle.style.color = "white";
      statusTitle.textContent = "Congratulation.. You won the game !!";
      let audio = document.querySelector("#success-audio");
      audio.play();
      setTimeout(function () {
        resetT();
      }, 10000);
    } else {
      if (score <= 0) {
        mainBody.style.backgroundColor = "red";
        titles.forEach((element) => {
          element.style.color = "white";
        });
        numberDisplayBoard.textContent = outputNumber;
        scoreTitle.innerHTML = `<b>High Score: </b>${score}`;
        scoreTitle.style.color = "white";
        statusTitle.textContent = "Sorry.. You lose the game !!";
        let audio = document.querySelector("#failure-audio");
        audio.play();
        setTimeout(function () {
          resetT();
        }, 8000);
      } else {
        if (geussedNumber > outputNumber) {
          statusTitle.textContent = "Number is too high !!";
          score -= 20;
          scoreTitle.innerHTML = `<b>Score: </b>${score}`;
        } else {
          statusTitle.textContent = "Number is too low !!";
          score -= 20;
          scoreTitle.innerHTML = `<b>Score: </b>${score}`;
        }
      }
    }
  } else {
    inputField.style.backgroundColor = "rgba(245, 207, 156, 0.753)";
    msg.textContent = "Please enter your guessed number first !!";
    msg.style.display = "block";
  }
});

document.querySelector(".reset").addEventListener("click", function () {
  resetT();
});
function resetT() {
  outputNumber = Math.floor(Math.random() * 10 + 1);
  score = 100;
  mainBody.style.background = "rgb(235, 214, 243)";
  titles.forEach((element) => {
    element.style.color = "black";
  });
  numberDisplayBoard.textContent = "?";
  scoreTitle.innerHTML = `<b>Score: </b>100`;
  scoreTitle.style.color = "black";
  statusTitle.textContent = "Guess a number between 1 to 10 !!";
  inputField.value = "";
  inputField.style.backgroundColor = "white";
  msg.style.display = "none";
  msg.style.backgroundColor = "rgba(248, 153, 44, 0.945)";
}
