window.onload = winInit;

// global
var slidesNum = 7;
var user;

function winInit(){
    getUserData();
    progressInit();
    slideInit();
}


// get user object from local storage
function getUserData() {
    if (localStorage.userProgress) {
        user = JSON.parse(localStorage.userProgress);
    } else {
        user = {
            "currentSlide" : 1,
            "completedSlides" : 0
        }
        localStorage.setItem("userProgress", JSON.stringify(user));
    }
}


// store progress in local storage
function storeUserData() {
    localStorage.userProgress = JSON.stringify(user);
}


function slideInit() {
    for(var i = 0; i < slidesNum; i++) {
        if((i + 1) == user.currentSlide) {
            document.getElementById("slide" + (i + 1)).style.display = "block";
        }
    }
}


// initialize the progress bar
function progressInit() {
    var ul = document.getElementById("progressbarList");

    for(var i = 0; i < slidesNum; i++) {
        var li = document.createElement("li");
        var tx = document.createTextNode(i + 1);
        
        li.setAttribute("id", "step" + (i + 1));
        
        if(user.currentSlide == (i + 1)) {
            li.classList.add("activeStep");
        }

        if(user.completedSlides >= (i + 1) && user.currentSlide !== (i + 1)) {
            
            li.classList.add("completeStep");

            if(user.currentSlide > user.completedSlides) {
                var p = (100 / (slidesNum - 1)) * (user.completedSlides);
            } else {
                var p = (100 / (slidesNum - 1)) * (user.completedSlides - 1);
            }
            
            document.getElementById("progress").style.width = p + "%";
        }
        
        li.appendChild(tx);
        ul.appendChild(li);
    }
}


// change slides from current active slide to an other one
function changeSlide(active, newActive) {

    // get active slide and hide it
    var activeSlide = document.getElementById("slide" + active);
    activeSlide.style.display = "none";
    // show new slide
    document.getElementById("slide" + newActive).style.display = "block";


    // get active step and remove class active
    var activeStep = document.getElementsByClassName("activeStep")[0];
    activeStep.classList.remove("activeStep");

    // get new active step, add class active
    var newActiveStep = document.getElementById("step" + newActive);
    newActiveStep.classList.add("activeStep");

    // if new slide is completed update completedSlides
    if(newActive > user.completedSlides) {
        user.completedSlides = newActive - 1;

        // update progress bar
        var p = (100 / (slidesNum - 1)) * (newActive - 1);
        document.getElementById("progress").style.width = p + "%";
    }

    // avoid overlap. remove class completed from active
    if(newActiveStep.classList.contains("completeStep")) {
        newActiveStep.classList.remove("completeStep")
    }

    // when no longer active, add class completed
    if(active <= user.completedSlides) {
        activeStep.classList.add("completeStep");
    }

    // update local storage
    user.currentSlide = newActive;
    storeUserData();
}


function nextSlide() {
    if(validateSlide()) {
        changeSlide(user.currentSlide, (user.currentSlide + 1));
    }
}


function prevSlide() {
    if(user.currentSlide > 0) {
        changeSlide(user.currentSlide, (user.currentSlide - 1));
    }
}


function validateSlide() {

    // check if user has completed the task befor moving on to the next
    //
    //
    if(user.currentSlide != slidesNum) {
        return true;
    } else {
        return false;
    }
}
