
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

pricklyPeach.displayHog = function() {
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

        
    // });
    //function to find chosenHog
    //-target THIS button
    // $('#done').on('submit', function(e) {
    //     e.preventDefault();
    
        console.log(`submit?`);
    
        let chosenHog = pricklyPeach.hogs[0];
    
        for (let hog in pricklyPeach.hogs) {
            if (hog > pricklyPeach.hogs) {
                chosenHog = hog;
                $(`.final img[id=${chosenHog}]`).toggleClass('showMe');
            }
        }
        console.log(chosenHog);
        $('.resultHog').text(`result here!`);
    });
}

//when you click the finalSubmit button
//show the hog with the most points name
// and their image toggleClass to .showMe

// for in loop over object
//     if current is larger than array[i], current= array[i]

// $("input:submit[value=See Ur Hog!]").on('submit', function(e) {
//     e.preventDefault();
//     //find a way to compare all three variables to find highest score
//     //make an array of objects to compare? or just an object?
//     $('.resultHog').text(`${chosenHog}`)

// });



// BUILD INIT FUNC
pricklyPeach.init = function() {
    pricklyPeach.hamburger();
    pricklyPeach.labelStyles();
    pricklyPeach.displayHog();
}
// DOCUMENT READY
$(document).ready(function() {

    pricklyPeach.init();

});