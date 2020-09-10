
const pricklyPeach = {};

pricklyPeach.hogs = {
    peach: 0,
    parsley: 0,
    bun: 0,
}

// function to make my burger menu appear
pricklyPeach.hamburger = function() {
    $('.hamburg').click(function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });
}


// function to determine the hog champion of points
pricklyPeach.hogPoints = function() {
    $('.addPoints').on('submit', function(e) {
        e.preventDefault();
    
        if ($('input:radio[id=peach]').is(':checked')) {
            pricklyPeach.hogs.peach += 1;
        } else if ($('input:radio[id=parsley]').is(':checked')) {
            pricklyPeach.hogs.parsley += 1;
        } else if ($('input:radio[id=bun]').is(':checked')) {
            pricklyPeach.hogs.bun += 1;
        }
        console.log(pricklyPeach.hogs);
    });
}

//function to show user generated hog
pricklyPeach.displayHog = function() {
        
        //-target THIS button
        $('#done').on('submit', function(e) {
            e.preventDefault();

            let winningScore = 0;
            let chosenHog = "";
    
            for (let hog in pricklyPeach.hogs) {

                const score = pricklyPeach.hogs[hog];

                if (score > winningScore) {
                    winningScore = score;
                    chosenHog = hog;   
                }
            }
            // to change image on last page
            $(`.finalPage img[id=${chosenHog}]`).toggleClass('showMe');

            // to change h3 on last page
            $('.resultHog').text(`${chosenHog}`);

        });
}



//TODO -----------------------------RESET QUIZ
pricklyPeach.reset = function() {
    $('.retake').on('submit', function() {
    //     //to reset form
    //     console.log('RESET?!')
    //     $("input").empty();
    console.log("button")
    location.reload();
        // $('input[type=radio]').prop("checked", false);
        // $('input[type=radio]').attr("checked", false);
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