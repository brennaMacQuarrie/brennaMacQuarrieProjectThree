
const pricklyPeach = {};

pricklyPeach.hogs = {
    peach: 0,
    parsley: 0,
    bun: 0,
}
pricklyPeach.hamburger = function() {
    $('.hamburg').click(function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });
}

pricklyPeach.labelStyles = function() {
    $('label').on('click', function() {
        $(this).toggleClass('selected');
        //this is for the pink clicked background,
        //how do i toggle off when another is selected?
    });
}

pricklyPeach.hogPoints = function() {
    $('form').on('submit', function(e) {
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
    
    
    //function to show chosenHog
pricklyPeach.displayHog = function() {
        
        //-target THIS button
        $('#done').on('submit', function(e) {
            e.preventDefault();

            console.log(`SUBMIT`);

            let chosenHog = pricklyPeach.hogs.peach;
    
            for (let hog in pricklyPeach.hogs) {
                if (hog > chosenHog) {
                    chosenHog = hog;
                    $(`.final img[id=${chosenHog}]`).toggleClass('showMe');
                }
            }
            console.log(chosenHog);
            $('.resultHog').text(`result here!`);

        });
}

pricklyPeach.reset = function() {
    $('.retake').on('click', function() {
        //to reset form
    });
}


// BUILD INIT FUNC
pricklyPeach.init = function() {
    pricklyPeach.hamburger();
    pricklyPeach.labelStyles();
    pricklyPeach.hogPoints();
    pricklyPeach.reset();
}
// DOCUMENT READY
$(document).ready(function() {

    pricklyPeach.init();

});