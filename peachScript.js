
const pricklyPeach = {};

pricklyPeach.hogs = {
    peach: 0,
    parsley: 0,
    bun: 0,
}

// function to make my burger menu appear
pricklyPeach.hamburger = function() {
    $(`.hamburg`).click(function () {
        $(this).toggleClass(`active`);
        $(`.menu`).toggleClass(`active`);
    });
}

//function to send points into hogs obj
pricklyPeach.hogPoints = function () {
    $(`.addPoints`).on(`submit`, function (e) {
        e.preventDefault();
        
        let nextPage = $(this).data('scrollto');

        let answer = $(this).find(`input:checked`).val();
        pricklyPeach.hogs[answer] += 1;
        
        if (answer === undefined) {
            swal({
                title: "please pick an answer!",
                button: "okie"
            });
        } else {
            window.location = nextPage;
        }
            
    });
}

//function to get & display user generated hog
pricklyPeach.displayHog = function() {
        
    $(`#done`).on(`submit`, function(e) {
        e.preventDefault();

        let winningScore = 0;
        let chosenHog = "";

        for (let hog in pricklyPeach.hogs) {
            const score = pricklyPeach.hogs[hog];
            
            if (score == winningScore) {
                chosenHog = hog;
            } else if (score > winningScore) {
                winningScore = score;
                chosenHog = hog;   
            } 
        }
        $(`.finalPage img[id=${chosenHog}]`).toggleClass(`showMe`);

        $(`.resultHog`).text(`${chosenHog}`);

    });
}

//function to reset the quiz 
pricklyPeach.reset = function() {

    $(`.retake`).on(`click`, function() {

        $(`input:checked`).prop(`checked`, ``);
        $(`.finalPage img`).removeClass(`showMe`);
        $(`.resultHog`).text("");

        for (let hog in pricklyPeach.hogs) {
            pricklyPeach.hogs[hog] = 0;
        }
    });
}


// INIT FUNC
pricklyPeach.init = function() {
    pricklyPeach.hamburger();
    pricklyPeach.hogPoints();
    pricklyPeach.displayHog();
    pricklyPeach.reset();
}

// DOCUMENT READY
$(document).ready(function() {
    
    pricklyPeach.init();

});