// const hogs = [
//     {
//         name: "peach",
//         totalPoints: [3, 4],
//         // picture: 
//     },
//     {
//         name: "parsley",
//         totalPoints: [5, 6, 7],
//         // picture:
//     },
//     {
//         name: "bun",
//         totalPoints: [8, 9],
//         // picture:
//     },
// ];

$(document).ready(function() {
    $('.hamburg').click(function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });

    let peachPoints = 0;
    let parsleyPoints = 0;
    let bunPoints = 0;

    // type:radio:checked . val = "parsley"
    // parselyPoints++


    // text <-- when u click <-- the specific label is given styling from .select... must UNCLICK to remove class, 
    // i want it to remove class on clicking other option
    $('label').on('click', function() {
        $(this).toggleClass('selected');
    });

    $('form').on('submit', function(e) {
        e.preventDefault();

        if ($("input:radio[id=peach]").is(":checked")) {
            peachPoints++;
        } else if ($("input:radio[id=parsley]").is(":checked")) {
            parsleyPoints++;
        } else if ($("input:radio[id=bun]").is(":checked")) {
            bunPoints++;
        }
        console.log('tell me u submit');
        console.log(peachPoints, parsleyPoints, bunPoints);
    });


    
    //when you click the finalSubmit button
    $("input:submit[value=See Ur Hog!]".on('submit', function(e) {
        e.preventDefault();
        
        $('.resultHog').text(`${chosenHog}`)

    });
    

    //change the img tag in .final to be that hog's image


});