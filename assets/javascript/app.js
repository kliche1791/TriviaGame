// creating global variables
var time = 30;

//array for goes to the different divs questions
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

//Function that Display all the questions
function displayQuestion(){

  decrement();

  timer();

  //hide the divs dedend of the number on counter var
  $("#timeUpQues" + counter).hide();

  $("#ansQues" + counter).hide();

  $("#incorQues" + counter).hide();

  console.log(counter);

  //Display the Div question depens on what number is the counter var
  $(questions[counter]).show();
  
}



//Function for drecrement the time
function decrement() {
  time--;

  $("#startT").hide();

  $("#timer").html("<h2> Time Remaining:" + " " + time + " " + "Seconds" + "</h2>");

  timeUp();
}


// Fuction for check if the user is out of the time
function timeUp(){

  // if time is 0 start the condition 
  if (time === 0) {

    //depends on the number of counter enter to the conditional 
    
    if(counter === 0){

      clearInterval(intervalId);

      $(questions[counter]).hide();

      $("#timeUpQues1").show();

      unanswered ++;

      counter ++;

      time = 30;

      setTimeout(displayQuestion,4000);
      
    } else if(counter === 1){

    clearInterval(intervalId);

    $(questions[counter]).hide();

    $("#timeUpQues2").show();

    unanswered ++;

    counter ++;

    time = 30;

    setTimeout(displayQuestion,4000);
    
  }else  if(counter === 2){

    clearInterval(intervalId);

    $(questions[counter]).hide();

    $("#timeUpQues3").show();

    unanswered ++;

    counter ++;

    time = 30;

    setTimeout(displayQuestion,4000);
    
  } else if(counter === 3){

    clearInterval(intervalId);

    $(questions[counter]).hide();

    $("#timeUpQues4").show();

    unanswered ++;

    counter ++;

    time = 30;

    setTimeout(displayQuestion,4000);
    
  } else if(counter === 4){

    clearInterval(intervalId);

    $(questions[counter]).hide();

    $("#timeUpQues5").show();

    unanswered ++;

    counter ++;

    time = 30;

    setTimeout(displayQuestion,4000);
    
  }else  if(counter === 5){

    clearInterval(intervalId);

    $(questions[counter]).hide();

    $("#timeUpQues6").show();

    unanswered ++;

    counter ++;

    time = 30;

    setTimeout(displayQuestion,4000);
    
  }else  if(counter === 6){

    clearInterval(intervalId);

    $(questions[counter]).hide();

    $("#timeUpQues7").show();

    unanswered ++;

    counter ++;

    time = 30;

    setTimeout(displayQuestion,4000);
    
  }else if(counter === 7){

    clearInterval(intervalId);

    $(questions[counter]).hide();

    $("#timeUpQues8").show();

    unanswered ++;

    counter ++;

    time = 30;

    setTimeout(resultTrivia,4000);
    
  }

}

}


//Function that check when the user press the button 
function questionsCon(){

//depend on the name of the button enter to check if the answer is correct or not 
  $(".ButtonQ1").on("click", function() {

    //get the value of the button
    var answer = $(this).attr("value");

    console.log("Question1" + counter);

    // if the answer is the same that the correct question  show the corrects divs
    if(answer === "2"){

    console.log(answer);

    clearInterval(intervalId);

    //hide the question and show the answers
    $(questions[counter]).hide();

    $("#ansQues1").show();

    correct ++;

    counter ++;

    time = 30;

    //display the next question
    setTimeout(displayQuestion,4000);

    //if not show the incorrect divs
    } else{

    clearInterval(intervalId);

    $(questions[counter]).hide();

    $("#incorQues1").show();

    wrong ++;

    counter ++;

    time = 30;

    setTimeout(displayQuestion,4000);

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

      setTimeout(displayQuestion,4000);

  
      } else{

      clearInterval(intervalId);

      $(questions[counter]).hide();

      $("#incorQues2").show();
      wrong ++;

      counter ++;
      
      time = 30;

      setTimeout(displayQuestion,4000);

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

      setTimeout(displayQuestion,4000);

  
      } else{

      clearInterval(intervalId);

      $(questions[counter]).hide();

      $("#incorQues3").show();

      wrong ++;

      counter ++;

      time = 30;

      setTimeout(displayQuestion,4000);

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

      setTimeout(displayQuestion,4000);

  
      } else{

      clearInterval(intervalId);

      $(questions[counter]).hide();

      $("#incorQues4").show();

      wrong ++;

      counter ++;

      time = 30;

      setTimeout(displayQuestion,4000);

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

      setTimeout(displayQuestion,4000);

  
      } else{

      clearInterval(intervalId);

      $(questions[counter]).hide();

      $("#incorQues5").show();

      wrong ++;

      counter ++;

      time = 30;

      setTimeout(displayQuestion,4000);

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

      setTimeout(displayQuestion,4000);

  
      } else{

      clearInterval(intervalId);

      $(questions[counter]).hide();

      $("#incorQues6").show();

      wrong ++;

      counter ++;

      time = 30;

      setTimeout(displayQuestion,4000);

      }

    });

    $(".ButtonQ7").on("click", function() {

      var answer = $(this).attr("value");

      console.log("Question 7" + counter);

      if(answer === "Hulk"){

        console.log(answer);

      clearInterval(intervalId);

      $(questions[counter]).hide();

      $("#ansQues7").show();

      correct ++;

      counter ++;

      time = 30;

      setTimeout(displayQuestion,4000);

  
      } else{
        
      clearInterval(intervalId);

      $(questions[counter]).hide();

      $("#incorQues7").show();

      wrong ++;

      counter ++;

      time = 30;

      setTimeout(displayQuestion,4000);

      }

    });

    $(".ButtonQ8").on("click", function() {

      var answer = $(this).attr("value");

      console.log("Question 8" + counter);

      if(answer === "Shuri"){

      console.log(answer);
        
      clearInterval(intervalId);

      $(questions[counter]).hide();

      $("#ansQues8").show();

      correct ++;

      counter ++;

      time = 30;

      setTimeout(resultTrivia,4000);

  
      } else{

      clearInterval(intervalId);

      $(questions[counter]).hide();

      $("#incorQues8").show();

      wrong ++;

      counter ++;

      time = 30;
      
      //counter comes to 8 enter to resulttrivia function
      setTimeout(resultTrivia,4000);
      }

    });

}


//Function that show the result of the trivia when the counter comes to 8 
function resultTrivia(){

  //if counter is 8 check hide all the divs and show the results div
  if(counter == 8){
    $("#timeUpQues" + counter).hide();
    $("#ansQues" + counter).hide();
    $("#incorQues" + counter).hide();
    $("#results").show();
    $("#correctA").text("Correct Answers:" + " " + correct );
    $("#incorrectA").text("Incorrect Answers:" + " " + wrong );
    $("#unasweredA").text("Unanswered :" + " " + unanswered );
  }
}

//function for start the trivia again
function reset(){

  //reset that values to the original value
  time = 30;

  counter = 0;

  correct = 0;

  wrong = 0; 

  unanswered = 0;

  //hide the results div
  $("#results").hide();
}



// when document is ready start the scripts
$(document).ready(function() {

  //if user click on start call the functions
  $("#startT").on("click", function() {

    displayQuestion();

    questionsCon();

    });


    //if user click on start again call the functions
    $("#resetT").on("click", function() {
      
        reset();
        
        displayQuestion();
        
      });


  })