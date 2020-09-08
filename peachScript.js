// const pointsArr = [
//     {
//         peachPoints: 0,
//         name: "peach",
//     },
//     {
//         parsleyPoints: 0,
//         name: "parsley",
//     },
//     {
//         bunPoints: 0,  
//         name: "bun",
//     } 


$(document).ready(function() {
    $('.hamburg').click(function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });

    // let peachPoints = 0;
    // let parsleyPoints = 0;
    // let bunPoints = 0;


    $('label').on('click', function() {
        //this is for the visual
        $(this).toggleClass('selected');
    });

    $('form').on('submit', function(e) {
        e.preventDefault();

        if ($("input:radio[id=peach]").is(":checked")) {
            peachPoints++;
            // pointsArr.peach
        } else if ($("input:radio[id=parsley]").is(":checked")) {
            parsleyPoints++;
        } else if ($("input:radio[id=bun]").is(":checked")) {
            bunPoints++;
        }
        // console.log('tell me u submit');
        console.log(peachPoints, parsleyPoints, bunPoints);

        $('input:submit[value=See Ur Hog!]').on('click', function() {

        })
    });

    $('')
    //when you click the finalSubmit button
    //show the hog with the most points name
    // and their image toggleClass to .showMe

    // make array of all variables
    // create largest variable
    // loop over array
    //     if current is larger than array[i], current= array[i]
    
    // $("input:submit[value=See Ur Hog!]").on('submit', function(e) {
    //     e.preventDefault();
    //     //find a way to compare all three variables to find highest score
    //     //make an array of objects to compare? or just an object?
    //     $('.resultHog').text(`${chosenHog}`)

    // });

});