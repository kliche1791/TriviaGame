// creating global variables
var time = 30;
var questions = ["#ques1", "#ques2", "#ques3", "#ques4", "#ques5", "#ques6", "#ques7", "#ques8"];
var wrong = 0; 
var correct = 0;
var intervalId;
var counter = 0;
var unanswered = 0;


//time function
function timer(){
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function displayQuestion(){
  decrement();
  timer();
  $("#timeUpQues" + counter).hide();
  $("#ansQues" + counter).hide();
  $("#incorQues" + counter).hide();
  console.log(counter);
  $(questions[counter]).show();
  
}

function decrement() {
  time--;
  $("#startT").hide();
  $("#timer").html("<h2> Time Remaining:" + " " + time + " " + "Seconds" + "</h2>");
  timeUp();
}

function timeUp(){
  if (time === 0) {
    if(counter === 0){
      clearInterval(intervalId);
      $(questions[counter]).hide();
      $("#timeUpQues1").show();
     unanswered ++;
      counter ++;
      time = 30;
      setTimeout(displayQuestion,3000);
      
    } else if(counter === 1){
    clearInterval(intervalId);
    $(questions[counter]).hide();
    $("#timeUpQues2").show();
    unanswered ++;
    counter ++;
    time = 30;
    setTimeout(displayQuestion,3000);
    
  }else  if(counter === 2){
    clearInterval(intervalId);
    $(questions[counter]).hide();
    $("#timeUpQues3").show();
    unanswered ++;
    counter ++;
    time = 30;
    setTimeout(displayQuestion,3000);
    
  } else if(counter === 3){
    clearInterval(intervalId);
    $(questions[counter]).hide();
    $("#timeUpQues4").show();
    unanswered ++;
    counter ++;
    time = 30;
    setTimeout(displayQuestion,3000);
    
  } else if(counter === 4){
    clearInterval(intervalId);
    $(questions[counter]).hide();
    $("#timeUpQue5").show();
    unanswered ++;
    counter ++;
    time = 30;
    setTimeout(displayQuestion,3000);
    
  }else  if(counter === 5){
    clearInterval(intervalId);
    $(questions[counter]).hide();
    $("#timeUpQues6").show();
    unanswered ++;
    counter ++;
    time = 30;
    setTimeout(displayQuestion,3000);
    
  }else  if(counter === 6){
    clearInterval(intervalId);
    $(questions[counter]).hide();
    $("#timeUpQues7").show();
    unanswered ++;
    counter ++;
    time = 30;
    setTimeout(displayQuestion,3000);
    
  }else if(counter === 7){
    clearInterval(intervalId);
    $(questions[counter]).hide();
    $("#timeUpQues8").show();
    unanswered ++;
    counter ++;
    time = 30;
    setTimeout(resultTrivia,3000);
    
  }

}
}



function questionsCon(){
  $(".ButtonQ1").on("click", function() {
    var answer = $(this).attr("value");
    console.log("Question1" + counter);
    if(answer === "2"){
    console.log(answer);
    clearInterval(intervalId);
    $(questions[counter]).hide();
    $("#ansQues1").show();
    correct ++;
    counter ++;
    time = 30;
    setTimeout(displayQuestion,3000);

    } else{
    clearInterval(intervalId);
    $(questions[counter]).hide();
    $("#incorQues1").show();
    wrong ++;
    counter ++;
    time = 30;
    setTimeout(displayQuestion,3000);
    }

  });

    $(".ButtonQ2").on("click", function() {
      var answer = $(this).attr("value");
      console.log("Question 2" + counter);
      if(answer === "47"){
        console.log(answer);
      clearInterval(intervalId);
      $(questions[counter]).hide();
      $("#ansQues2").show();
      correct ++;
      counter ++;
      time = 30;
      setTimeout(displayQuestion,3000);

  
      } else{
      clearInterval(intervalId);
      $(questions[counter]).hide();
      $("#incorQues2").show();
      wrong ++;
      counter ++;
      time = 30;
      setTimeout(displayQuestion,3000);
      }

    });

    $(".ButtonQ3").on("click", function() {
      var answer = $(this).attr("value");
      console.log("Question 3" + counter);
      if(answer === "Mind Stone"){
        console.log(answer);
      clearInterval(intervalId);
      $(questions[counter]).hide();
      $("#ansQues3").show();
      correct ++;
      counter ++;
      time = 30;
      setTimeout(displayQuestion,3000);

  
      } else{
      clearInterval(intervalId);
      $(questions[counter]).hide();
      $("#incorQues3").show();
      wrong ++;
      counter ++;
      time = 30;
      setTimeout(displayQuestion,3000);
      }

    });

    $(".ButtonQ4").on("click", function() {
      var answer = $(this).attr("value");
      console.log("Question 4" + counter);
      if(answer === "Wasp"){
        console.log(answer);
      clearInterval(intervalId);
      $(questions[counter]).hide();
      $("#ansQues4").show();
      correct ++;
      counter ++;
      time = 30;
      setTimeout(displayQuestion,3000);

  
      } else{
      clearInterval(intervalId);
      $(questions[counter]).hide();
      $("#incorQues4").show();
      wrong ++;
      counter ++;
      time = 30;
      setTimeout(displayQuestion,3000);
      }

    });

    $(".ButtonQ5").on("click", function() {
      var answer = $(this).attr("value");
      console.log("Question 5" + counter);
      if(answer === "Cerebro"){
        console.log(answer);
      clearInterval(intervalId);
      $(questions[counter]).hide();
      $("#ansQues5").show();
      correct ++;
      counter ++;
      time = 30;
      setTimeout(displayQuestion,3000);

  
      } else{
      clearInterval(intervalId);
      $(questions[counter]).hide();
      $("#incorQues5").show();
      wrong ++;
      counter ++;
      time = 30;
      setTimeout(displayQuestion,3000);
      }

    });

    $(".ButtonQ6").on("click", function() {
      var answer = $(this).attr("value");
      console.log("Question 6" + counter);
      if(answer === "6"){
        console.log(answer);
      clearInterval(intervalId);
      $(questions[counter]).hide();
      $("#ansQues6").show();
      correct ++;
      counter ++;
      time = 30;
      setTimeout(displayQuestion,3000);

  
      } else{
      clearInterval(intervalId);
      $(questions[counter]).hide();
      $("#incorQues6").show();
      wrong ++;
      counter ++;
      time = 30;
      setTimeout(displayQuestion,3000);
      }

    });

    $(".ButtonQ7").on("click", function() {
      var answer = $(this).attr("value");
      console.log("Question 7" + counter);
      if(answer === "Mind Stone"){
        console.log(answer);
      clearInterval(intervalId);
      $(questions[counter]).hide();
      $("#ansQues3").show();
      correct ++;
      counter ++;
      time = 30;
      setTimeout(displayQuestion,3000);

  
      } else{
      clearInterval(intervalId);
      $(questions[counter]).hide();
      $("#incorQues3").show();
      wrong ++;
      counter ++;
      time = 30;
      setTimeout(displayQuestion,3000);
      }

    });

    $(".ButtonQ3").on("click", function() {
      var answer = $(this).attr("value");
      console.log("Question 3" + counter);
      if(answer === "Mind Stone"){
        console.log(answer);
      clearInterval(intervalId);
      $(questions[counter]).hide();
      $("#ansQues3").show();
      correct ++;
      counter ++;
      time = 30;
      setTimeout(resultTrivia,3000);

  
      } else{
      clearInterval(intervalId);
      $(questions[counter]).hide();
      $("#incorQues3").show();
      wrong ++;
      counter ++;
      time = 30;
      setTimeout(resultTrivia,3000);
      }

    });


}

function resultTrivia(){
  if(counter == 2){
    $("#timeUpQues" + counter).hide();
    $("#ansQues" + counter).hide();
    $("#incorQues" + counter).hide();
    $("#results").show();
    $("#correctA").text("Correct Answers:" + " " + correct );
    $("#incorrectA").text("Incorrect Answers:" + " " + wrong );
    $("#unasweredA").text("Unanswered :" + " " + unanswered );
  }
}

function reset(){
  time = 30;
  counter = 0;
  correct = 0;
  wrong = 0; 
  unanswered = 0;
  $("#results").hide();
}


$(document).ready(function() {
  $("#startT").on("click", function() {
    displayQuestion();
    questionsCon();
    });

    $("#resetT").on("click", function() {
        reset();
        displayQuestion();
        
      });


  })