
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
        
        let answer = $(this).find(`input:checked`).val();
        pricklyPeach.hogs[answer] += 1;
        

        // this is where i got stuck. I wanted to stop it from scrolling but I think I'd need to build a new function to get the buttons to scroll. I want to take some time this week to learn ho wto do this properly so i can try it next time.
        
        // if (!answer) {
            // wanted to change this attribute on only the current form, but i'd have to toggle it...
        //     $(this[".buttonSteez input"]).attr("onclick", "");
            // this throws an alert when the user hasn't picked an option, but it still scrolls to next page.
        //     swal({
        //         title: "please pick an answer!",
        //         button: "okie"
        //     });
        // } 
            
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


// BUILD INIT FUNC
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