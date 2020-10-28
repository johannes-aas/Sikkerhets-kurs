
var slides = 1;

function startquiz(){
  first.style = "display:''";
  document.getElementById("knapp").disabled=true;
}

function neste(){
  slides++;
  if(slides == 1){
    first.style = "display:''";
    second.style = "display:none";
    third.style = "display:none";
    forth.style = "display:none";
    fifth.style = "display:none";
    sixth.style = "display:none";
    seventh.style = "display:none";
  }else if(slides == 2){
    first.style = "display:none";
    second.style = "display:''";
    third.style = "display:none";
    forth.style = "display:none";
    fifth.style = "display:none";
    sixth.style = "display:none";
    seventh.style = "display:none";
  }else if(slides == 3){
    first.style = "display:none";
    third.style = "display:''";
    second.style = "display:none";
    forth.style = "display:none";
    fifth.style = "display:none";
    sixth.style = "display:none";
    seventh.style = "display:none";
  }else if(slides == 4){
    first.style = "display:none";
    forth.style = "display:''";
    second.style = "display:none";
    third.style = "display:none";
    fifth.style = "display:none";
    sixth.style = "display:none";
    seventh.style = "display:none";
  }else if(slides == 5){
    first.style = "display:none";
    fifth.style = "display:''";
    second.style = "display:none";
    third.style = "display:none";
    forth.style = "display:none";
    sixth.style = "display:none";
    seventh.style = "display:none";
  }else if(slides == 6){
    first.style = "display:none";
    sixth.style = "display:''";
    second.style = "display:none";
    third.style = "display:none";
    forth.style = "display:none";
    fifth.style = "display:none";
    seventh.style = "display:none";
  }else if(slides >= 7){
    first.style = "display:none";
    seventh.style = "display:''";
    second.style = "display:none";
    third.style = "display:none";
    forth.style = "display:none";
    fifth.style = "display:none";
    sixth.style = "display:none";
    slides = 7;
  }
}

function forrige(){
  slides--;
  if(slides <= 1){
    first.style = "display:''";
    second.style = "display:none";
    third.style = "display:none";
    forth.style = "display:none";
    fifth.style = "display:none";
    sixth.style = "display:none";
    seventh.style = "display:none";
    slides = 1;
  }else if(slides == 2){
    first.style = "display:none";
    second.style = "display:''";
    third.style = "display:none";
    forth.style = "display:none";
    fifth.style = "display:none";
    sixth.style = "display:none";
    seventh.style = "display:none";
  }else if(slides == 3){
    first.style = "display:none";
    third.style = "display:''";
    second.style = "display:none";
    forth.style = "display:none";
    fifth.style = "display:none";
    sixth.style = "display:none";
    seventh.style = "display:none";
  }else if(slides == 4){
    first.style = "display:none";
    forth.style = "display:''";
    second.style = "display:none";
    third.style = "display:none";
    fifth.style = "display:none";
    sixth.style = "display:none";
    seventh.style = "display:none";
  }else if(slides == 5){
    first.style = "display:none";
    fifth.style = "display:''";
    second.style = "display:none";
    third.style = "display:none";
    forth.style = "display:none";
    sixth.style = "display:none";
    seventh.style = "display:none";
  }else if(slides == 6){
    first.style = "display:none";
    sixth.style = "display:''";
    second.style = "display:none";
    third.style = "display:none";
    forth.style = "display:none";
    fifth.style = "display:none";
    seventh.style = "display:none";
  }else if(slides == 7){
    first.style = "display:none";
    seventh.style = "display:''";
    second.style = "display:none";
    third.style = "display:none";
    forth.style = "display:none";
    fifth.style = "display:none";
    sixth.style = "display:none";
  }
}

function done(){
  var parUt = document.getElementById("parUt");
  var svaret1 = document.getElementById("riktig1");
  var svaret2 = document.getElementById("riktig2");
  var svaret3 = document.getElementById("riktig3");
  var svaret4 = document.getElementById("riktig4");
  var svaret5 = document.getElementById("riktig5");
  var svaret6 = document.getElementById("riktig6");
  var svaret7 = document.getElementById("riktig7");
  seventh.style = "display:none";
  kake.style = "display:''";
    if(svaret1.checked){
      parUt.innerHTML += "Spørsmål 1. er Riktig<br>";
    }else{
      parUt.innerHTML += "Spørsmål 1. er Feil<br>";
    }

    if(svaret2.checked){
      parUt.innerHTML += "Spørsmål 2. er Riktig<br>";
    }else{
      parUt.innerHTML += "Spørsmål 2. er Feil<br>";
    }

    if(svaret3.checked){
      parUt.innerHTML += "Spørsmål 3. er Riktig<br>";
    }else{
      parUt.innerHTML += "Spørsmål 3. er Feil<br>";
    }

    if(svaret4.checked){
      parUt.innerHTML += "Spørsmål 4. er Riktig<br>";
    }else{
      parUt.innerHTML += "Spørsmål 4. er Feil<br>";
    }

    if(svaret5.checked){
      parUt.innerHTML += "Spørsmål 5. er Riktig<br>";
    }else{
      parUt.innerHTML += "Spørsmål 5. er Feil<br>";
    }

    if(svaret6.checked){
      parUt.innerHTML += "Spørsmål 6. er Riktig<br>";
    }else{
      parUt.innerHTML += "Spørsmål 6. er Feil<br>";
    }

    if(svaret7.checked){
      parUt.innerHTML += "Spørsmål 7. er Riktig<br>";
    }else{
      parUt.innerHTML += "Spørsmål 7. er Feil<br>";
    }


}
