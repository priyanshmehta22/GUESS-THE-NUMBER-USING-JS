console.log("THIS IS A GAME");

let randomNumber = Math.floor(Math.random() * 20 + 1);

function guess() {
  console.log(randomNumber);
  let score = 20;
  let highscore = 20;
  let end = 0;

  let button = document.getElementById("submit");
  button.addEventListener("click", function () {
    let myguess = document.getElementById("exampleFormControlTextarea1").value;
    let myguessNumber = +myguess;
    console.log(myguess);
    if (myguess != randomNumber) {
      score--;
      highscore--;
      console.log("score is", score);
      console.log("highscore is", highscore);
      document.getElementById("score").innerHTML = score;
      document.getElementById("HIGH_score").innerHTML = highscore;
      console.log(myguessNumber);
      document.getElementById("exampleFormControlTextarea1").value = "";
      if (end == score) {
        alert("GAME OVER");
        guess();
      }
    } else {
      confirm("YOU WIN");
      console.log(myguessNumber);
      document.getElementById("exampleFormControlTextarea1").value = "";
    }
  });
}
guess();
