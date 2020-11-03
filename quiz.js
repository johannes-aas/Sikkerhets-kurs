(function() {
    var questions = [{
        question: "Hvilke former vil en kriminell prøve å lure deg på?",
        choices: [
            "Fristelser, Frykt og Tillit", 
            "Tillit, Ansvar og Frykt", 
            "Ansvar, Kjærlighet og Fristelser"
        ],
        correctAnswer: 0
    }, {
        question: "Hva skal man se etter for å komme frem til at en email er falsk?",
        choices: [
            "Avsenders email-adresse, Skrivefeil, Innhold og Bilder/Logoer", 
            "Du trenger ikke sjekke, filteret på mailen fikser det", 
            "Klikk på linken og log in på nettsiden for å sjekke",
            "Mail-adresser"
        ],
        correctAnswer: 0
    }, {
        question: "Hva skal du gjøre dersom det kommer opp “Et virus er oppdaget på din pc?",
        choices: [
            "Klikk videre og last ned programmet du blir bedt om.", 
            "Skru av og på pcen", 
            "Sjekke om det er fra din egen antivirus, om du er sikker på det kan du klikke videre."
        ],
        correctAnswer: 2
    }, {
        question: "Vinner du penger og premier av å surfe på nettet?",
        choices: [
            "Ja",
            "Nei"
        ],
        correctAnswer: 1
    }, {
        question: "Hva kan du gjøre for å holde bedriften trygg?",
        choices: [
            "Laste ned programmer på jobb-pcen for å holde deg trygg", 
            "Bli oppmerksom på egen adferd på nettet, ikke laste ned ukjente programmer og følge sikkerhetsreglement", 
            "Ingenting, jeg har ikke ansvar for å holde bedriften trygg"
        ],
        correctAnswer: 1
    }, {
        question: "Om du tror at du har blitt hacket, hva kan du gjøre?",
        choices: [
            "Varsle politiet, og få dem til å undersøke brukerene dine for å sjekke om du har blitt hacket.", 
            "Ingenting, det er ikke noe jeg får gjort med det", 
            "Sjekke innloggingshistorikk, ta nødvendige tiltak (og varsle IT-ansvarlige dersom dette skjer på jobb)"
        ],
        correctAnswer: 2
    }, {
        question: "Hvilke metoder er vanlige innenfor sosial manipulering?",
        choices: [
            "Phishing, Baiting og Malware", 
            "Bruteforcing, Hacking, Spyware", 
            "Fishing, Cheating, Hacking"
        ],
        correctAnswer: 0
    }];
    
    var questionCounter = 0; //Tracks question number
    var selections = []; //Array containing user choices
    var quiz = $('#quiz'); //Quiz div object
    
    // Display initial question
    displayNext();
    
    // Click handler for the 'next' button
    $('#nextQ').on('click', function (e) {
      e.preventDefault();
      
      // Suspend click listener during fade animation
      if(quiz.is(':animated')) {        
        return false;
      }
      choose();
      
      // If no user selection, progress is stopped
      if (isNaN(selections[questionCounter])) {
        alert('Velg et svaralternativ');
      } else {
        questionCounter++;
        displayNext();
      }
    });
    
    // Click handler for the 'prev' button
    $('#prevQ').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      choose();
      questionCounter--;
      displayNext();
    });
    
    // Click handler for the 'Start Over' button
    $('#start').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      questionCounter = 0;
      selections = [];
      displayNext();
      $('#start').hide();
    });

    // Creates and returns the div that contains the questions and 
    // the answer selections
    function createQuestionElement(index) {
      var qElement = $('<div>', {
        id: 'question'
      });
      
      var header = $('<h2>Spørsmål ' + (index + 1) + ':</h2>');
      qElement.append(header);
      
      var question = $('<p>').append(questions[index].question);
      qElement.append(question);
      
      var radioButtons = createRadios(index);
      qElement.append(radioButtons);
      
      return qElement;
    }
    
    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {
        var radioList = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < questions[index].choices.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += questions[index].choices[i];
          item.append(input);
          radioList.append(item);
        }
        return radioList;
      }
    
    // Reads the user selection and pushes the value to an array
    function choose() {
      selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }
    
    // Displays next requested element
    function displayNext() {
      quiz.fadeOut(function() {
        $('#question').remove();
        
        if(questionCounter < questions.length){
          var nextQuestion = createQuestionElement(questionCounter);
          quiz.append(nextQuestion).fadeIn();
          if (!(isNaN(selections[questionCounter]))) {
            $('input[value='+selections[questionCounter]+']').prop('checked', true);
          }
          
          // Controls display of 'prev' button
          if(questionCounter === 1){
            $('#prevQ').show();
          } else if(questionCounter === 0){
            
            $('#prevQ').hide();
            $('#nextQ').show();
          }
        }else {
          var scoreElem = displayScore();
          quiz.append(scoreElem).fadeIn();
          $('#nextQ').hide();
          $('#prevQ').hide();
          $('#start').show();
        }
      });
    }
    
    // Computes score and returns a paragraph element to be displayed
    function displayScore() {
      var score = $('<p>',{id: 'question'});
      
      var numCorrect = 0;
      for (var i = 0; i < selections.length; i++) {
        if (selections[i] === questions[i].correctAnswer) {
            numCorrect++;
        }
      }
      
      score.append('Du fikk ' + numCorrect + ' av ' +
                   questions.length + ' riktig!');
      return score;
    }
  })();