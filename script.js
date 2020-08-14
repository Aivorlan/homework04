var timer = document.querySelector("#timer");
var quiz = document.querySelector('#quiz');
var scoreBtn = document.querySelector("#highScores");


scoreBtn.addEventListener("click", toggleScoreDisplay);
localStorage.setItem("highScores", JSON.stringify([]));



function setTime() {
	var timerInterval = setInterval(function () {
		secondsLeft--;
		timer.innerHTML = `
		<div>Time Remaining: ${secondsLeft} seconds
		<br>
		${score} of ${questions.length}</div>
		`;
		if (secondsLeft <= 0) {
			clearInterval(timerInterval);
			return endGame();
		}
	}, 1000);
};


var questions = [
    {
      title: "What is the length of the following array? var cars = ["Saab", "Volvo", "BMW"];",
      choices: ["3", "4", "2", "5"],
      answer: "2"
    },
    {
      title: "Which method searches the array for an element and returns its position?",
      choices: ["lastIndexOf()", "reduceRight()", "indexOf()", "isArray()"],
      answer: "indexOf()"
    },
    {
      title: "Which method below allows you to log the console?",
      choices: ["var = log.console", "(Console.log)", "#console.log", "console.log"],
      answer: "console.log"
    },
    {
      title: "What are the three Javascript declarations?",
      choices: ["if, let, else", "else, if, var", "var, const, let", "num, boolean, string"],
      answer: "var, const, let"
    },
    {
      title: "Which of the options is a list of datatype?",
      choices: ["if, let, else", "else, if, var", "var, const, let", "num, boolean, string"],
      answer: "num, boolean, string"
    },
  
  ];
