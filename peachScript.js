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
    $('label').on('click', function() {
        $(this).toggleClass('selected');
    });

    $('form').on('submit', function(e) {
        e.preventDefault();

        if ($('form[name=peach]:checked')) {
            peachPoints++;
            console.log(peachPoints)
        } else if ($('form[name=parsley]:checked')) {
            parsleyPoints++;
            console.log(parsleyPoints)
        } else if ($('form[name=bun]:checked')) {
            bunPoints++;
            console.log(bunPoints)
        }
        console.log('tell me u submit');
    });
    // console.log(userPoints);





    //when you click the finalSubmit button
    // $('.finishButton').on('submit', function(e) {
    //     e.preventDefault();
        
    //     for (let i = 0; i < hogs.length; i++) {
    //         let currentHog = hogs[i];
    //         let hogArray = currentHog.points;
    //         for (let j = 0; j < hogArray.length; j++) {
    //             if (userPoints === hogArray[j]) {
    //                 chosenHog = currentHog.name;
    //             }
    //         }
    //     }

    // });
    
    // $('.resultHog').text(`${chosenHog}`)

    //change the img tag in .final to be that hog's image


});