var numCorrect = 0;

var ans1 = document.getElementById('a1');
var ans2 = document.getElementById('a2');
var ans3 = document.getElementById('a3');
var bonus = document.getElementById('bonus');
var correctCount = document.getElementById('elCorrect');

var questions = ["Do I have any pets?", "Do I love Redbull?", "Is black my favorite color?", "How many countries have I travelled to?"];
var answers = ["no", "yes", "yes", "12"];
var els = [ans1, ans2, ans3, bonus]

alert("Welcome to my guessing game. I'm going to ask you a couple of yes or no questions so you can get to know me.");

function game(questions, answers, index) {
  var ques = prompt(questions).toLowerCase();


  if (ques === answers || ques === parseInt(answers)) {
    console.log(ques + ' correct');
    els[index].textContent = ques + ' is correct';
    numCorrect++

  } else {
    console.log(ques + ' is incorrect');
    els[index].textContent = ques + ' is incorrect';
    }
  }

  for (var i = 0; i < questions.length; i++) {
    game(questions[i], answers [i], i);
}

elCorrect.textContent = "You got " + numCorrect + " out of 4 questions!"


// .

 //  var counter = 0;
 //
 //
 //
 //  var ques1 = prompt("Do I have any pets?");
 //   console.log("Answer to ques1" + " " + ques1);
 //
 //  if (ques1 === "no" ||  ques1 === "NO"){
 //   console.log("no is correct");
 //   alert(userName + " " + "you're right I dont have any pets.");
 //   counter ++;
 // } else if (ques1 === "yes" || ques1 === "YES") {
 //     console.log("yes is incorrect");
 //     alert("Wrong! I don't have any pets");
 //  } else if (ques1 !== "yes" || "YES" || "no" || "NO"){
 //     console.log("incorrect input");
 //     alert("incorrect input");
 //  };
 //
 //
 //  var ques2 = prompt("Do I love Redbull?");
 //   console.log("Answer to ques2" + " " + ques2);
 //
 //  if (ques2 === "yes" || ques2 === "YES") {
 //     console.log("yes is correct");
 //     alert("YES!"+ " " + userName + " " + "Redbull is life!!");
 //     counter ++;
 //   } else if (ques2 === "no" || ques2 ==="NO") {
 //      console.log("no is incorrect");
 //      alert("You don't know me at all.  I love Redbull")
 //   } else if (game !== "yes" || "YES" || "no" || "NO"){
 //      console.log("incorrect input");
 //      alert("incorrect input");
 //   };
 //
 //  var ques3 = prompt("Is black my favorite color?");
 //   console.log("Answer to ques3" + " " + ques3);
 //
 //  if (ques3 === "yes" || ques3 === "YES") {
 //    console.log("yes is correct");
 //    alert("Yup! All black errthang");
 //    counter ++;
 //  } else if (ques3 === "no" || ques3 === "NO"){
 //     console.log("no is incorrect");
 //     alert("Wrong! Black is my favorite color.");
 //  } else if (game !== "yes" || "YES" || "no" || "NO"){
 //     console.log("incorrect input");
 //     alert("incorrect input");
 //  };
 //
 //  alert(userName + " " + "you got" + " " + counter + " " + "out of 3 right!")
 //
 //
