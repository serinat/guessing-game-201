   var userName = prompt("Hello what's your name?");
    console.log("This is the userName" + " " + userName);
    alert("Hi" + " " + userName + "!");

   var game = prompt(userName + " " + "could you answer some questions for me? \n yes or no");
    console.log("Answer to game" + " " + game);

    if (game === "yes" || game === "YES"){
      console.log("yes is correct");
      alert("Great" + " " + userName + " " + "let's get started!");
    } else if (game === "no" || game ==="NO") {
      console.log("no is incorrect");
      alert("Sucks for you" + " " + userName + " " + "you have to answer anyway");
    } else if (game !== "yes" || "YES" || "no" || "NO"){
      console.log("incorrect input");
      alert("incorrect input");
    };


   var ques1 = prompt("Do you like pizza? \n yes or no");
    console.log("Answer to ques1" + " " + ques1);

   if (ques1 === "yes" ||  ques1 === "YES"){
    console.log("yes is correct");
    alert(userName + " " + "you're awesome");
  } else if (ques1 === "no" || ques1 === "NO") {
    console.log("no is incorrect");
    alert(userName + " " +"you are missing out");
  } else if (ques1 !== "yes" || "YES" || "no" || "NO"){
    console.log("incorrect input");
    alert("incorrect input");
  };


  var ques2 = prompt("Are you going to eat pizza today? \n yes or no");
   console.log("Answer to ques2" + " " + ques2);

   if (ques2 === "yes" || ques2 === "YES") {
    console.log("yes is correct");
    alert("YES!"+ " " + userName + " " + "pizza is always good!!!");
  } else if (ques2 === "no" || ques2 ==="NO") {
    console.log("no is incorrect");
    alert("Lame" + " " + userName + " " + "pizza is always good!")
  } else if (game !== "yes" || "YES" || "no" || "NO"){
    console.log("incorrect input");
    alert("incorrect input");
  };

   var ques3 = prompt("Are you going to go get pizza right now? \n yes or no");
    console.log("Answer to ques3" + " " + ques3);

   if (ques3 === "yes" || ques3 === "YES") {
     console.log("yes is correct");
     alert("Right on!" + " "+ userName + " " + "Go get some pizza!");
   } else if (ques3 === "no" || ques3 === "NO"){
     console.log("no is incorrect");
     alert("Bummer" + " " + userName);
   } else if (game !== "yes" || "YES" || "no" || "NO"){
     console.log("incorrect input");
     alert("incorrect input");
   };
