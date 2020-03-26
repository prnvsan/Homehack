
var questions = [
"Do you have Fever?"
, "Do you have dry cough?"
, "Do you have trouble breathing?"
, "Do you have running nose?"
, "Have you been in contact with a person who have come from abroad?",];
var choices = ["", "", "", "", ""];

var i = 0;
$("h3").fadeOut(function() {
   $(this).text(questions[i]).fadeIn();
 });

$('.QuestionBox button').on('click', function () {
   
   if (this.name == 'y') {
      choices[i] = "y";
   }
   else {

      choices[i] = "n";
   }
   console.log(choices[i]);
   i++;
   $("h3").fadeOut(function() {
      $(this).text(questions[i]).fadeIn();
    });
   if(i==questions.length){
   $("button").fadeOut("slow");

   if(choices.indexOf("y")>=0)
      result="You are a potential COVID-19 victim , contact authorities soon as possible ";
   else
      result="It seems you may not have COVID-19 , but still stay at home and seperate yourself from others.";
   $("h3").fadeOut(function() {
      $(this).text(result).fadeIn();
    });
   }

  
})

