const hogs = [
    {
        name: "peach",
        points: [3, 4],
        // picture: 
    },
    {
        name: "parsley",
        points: [5, 6, 7],
        // picture:
    },
    {
        name: "bun",
        points: [8, 9],
        // picture:
    },
];

$(document).ready(function() {
    $('.hamburg').click(function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });
    //create a userPoints variable
    //when user clicks an a tag, add a certain number of 
    let userPoints = 0;
    $('.option').on('click', function() {
        
        if ($('this').hasClass("peach")) {
            userPoints += 1;
            console.log(userPoints);

        } else if ($(this).hasClass("parsley")) {
            userPoints += 2;
            console.log(userPoints);

        } else if ($(this).hasClass("bun")) {
            userPoints += 3;
            console.log(userPoints);

        }
        console.log('tell me u submit');
    });
    console.log(userPoints);

    let chosenHog = "";
    //when you click the submit button
    $('.finishButton').on('submit', function(e) {
        e.preventDefault();
        
        for (let i = 0; i < hogs.length; i++) {
            let currentHog = hogs[i];
            let hogArray = currentHog.points;
            for (let j = 0; j < hogArray.length; j++) {
                if (userPoints === hogArray[j]) {
                    chosenHog = currentHog.name;
                }
            }
        }

    });
    
    $('.resultHog').replaceWith(`<h3>${chosenHog}</h3>`)

    //change the img tag in .final to be that hog's image


});