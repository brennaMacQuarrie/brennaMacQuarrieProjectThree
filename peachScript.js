
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

// function to scroll????

// pricklyPeach.scrollTo = function(id) {
//     console.log("scroll");

//     if ($(id).length) {
//         var getOffset = $(id).offset().top;
//         var targetDistance = 50;
//         $('html,body').animate({
//             scrollTop: getOffset - targetDistance
//         }, 500);
//     }
// }



//function to send points into hogs obj
pricklyPeach.hogPoints = function () {
    $(`.addPoints`).on(`submit`, function (e) {
        e.preventDefault();
        
        let answer = $(this).find(`input:checked`).val();
        pricklyPeach.hogs[answer] += 1;
        

        // this is where i got stuck. I wanted to stop it from scrolling but I think I'd need to build a new function to get the buttons to scroll differently. I want to take some time this week to learn how to do this properly so i can try it next time.
        
        // if (!answer) {
            // wanted to change this attribute on only the current form, but i'd have to toggle it...

            // this throws an alert when the user hasn't picked an option, but it still scrolls to next page.
        //     swal({
        //         title: "please pick an answer!",
        //         button: "okie"
        //     });
        // } else {
            //pricklyPeach.scrollTo();
        // }
            
    });
}

//function to get & display user generated hog
pricklyPeach.displayHog = function() {
        
    $(`#done`).on(`submit`, function(e) {
        e.preventDefault();

        const chosenHog = Object.keys(pricklyPeach.hogs).reduce((a, b) =>
            pricklyPeach.hogs[a] > pricklyPeach.hogs[b] ? a : b
        );

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
    // pricklyPeach.scrollTo();
    pricklyPeach.hogPoints();
    pricklyPeach.displayHog();
    pricklyPeach.reset();
}

// DOCUMENT READY
$(document).ready(function() {
    
    pricklyPeach.init();

});