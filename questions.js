var questions = [
    "Do you have a fever?"
    , "Do you have a dry cough?"
    , "Do you have trouble breathing?"
    , "Do you have a runny nose?"
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
       $(".QuestionBox button").fadeOut("slow");
   
       if(choices.indexOf("y")>=0)
          result="You are at high risk of having contracted COVID-19,follow government guidelines and self isolate yourself.";
       else
          result="It seems you may not have COVID-19 ,but stay at home and practice social distancing.";
       $("h3").fadeOut(function() {
          $(this).text(result).fadeIn();
        });
       }
    
      
    })