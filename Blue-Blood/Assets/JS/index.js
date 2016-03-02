
$(document).ready(function() {

// Shotclock 30 seconds countdown
    var shotClock = 30;
    var countDown = setInterval (function() {
        shotClock = shotClock - 1; //subtract one from variable
        $('#timer').text("Shot Clock : " + shotClock);
        // console.log(shotClock);
        if (shotClock < 1) { // once secondsUntilGame reaches zero...
      clearInterval(countDown); //stop the countdown
     }
    }, 1000); //this happens every second until it doesn't happen anymore
  });

//Working Function for card flip animation//
    // function animateFlip(card) {
    //         $(card).toggleClass('flipped');
    //         $(card).children().toggleClass('name');
    // }
    // $('.card').click(function( ) {
    //     animateFlip(this);
    // });
var fouls= 8;
var flippedNames = [];
var flippedCards =[];

 $('.card').click(function() {     // when any card is clicked...
         if ($(this).attr('class').includes('flipped')) { // IF the card already has class flipped
         return false;   //do nothing
     }
        else {
        $(this).addClass('flipped'); //1. Flip the card
        $(this).children().toggleClass('name');  //2. Display the name
        flippedCards.push($(this));   //3. add THIS to flippedCards[]
        flippedNames.push($(this).children().attr('class'));  //4. add THIS card's icon's class to flippedIcons[]

        if (flippedNames.length === 2){  // IF flippedIcons[].length === 2
        if (flippedNames[0] === flippedNames [1]) {  //do the icons on the flipped cards match?
          console.log("Match");  // Display Match in the console.
         flippedCards = [];  // empty array flippedCards
         flippedIcons = [];  // empty array flippedIcons
            }

         else {
          console.log("not a match");
          fouls = fouls -1;
          console.log(fouls);
          $(flippedCards[0]).removeClass('flipped');  //removes cardFlip class
          $(flippedCards[1]).removeClass('flipped'); //from both .card (s)
          $(flippedCards[0].children().toggleClass('name'));
          $(flippedCards[1].children().toggleClass('name'));
          flippedCards = [];  // empty array flippedCards
          flippedIcons = [];  // empty array flippedIcons
            }
          };
      };
  });
  //           setTimeout(function() {  //delay what's inside this thing
  //
  //           $(".fouls").children().last().remove();// remove a heart
  //           if ($(".fouls").children().length > 0){
  //             //do nothing
  //           } else {
  //             $('.hearts').text("You lose "); //announce a lost game
  //           }
  //           flippedCards = [];// empty array flippedCards
  //           flippedIcons = [];// empty array flippedIcons
  //         }, 500); // by 1 second
  //       }
  //     } else {
  //       return false; // do nothing (you need another card to be clicked)
  //     }
  //   }
  // });




    //     if (click1) {
    //     click1= this.className;
    //   }
    //     else {
    //      click2 = this.className;
    //      if (isMatched(click1, click2)) {
        //If true than change class to permanently open
        //if false change class to Not Flipped and remove one fouls
        // check foul number


/*  Original code used for toggling class to flipped.
    $('.card').click(function() {
        $(this).toggleClass('flipped');
    })
});

$('.box').hasClass('.notflipped');

if $('.box').click(function( ) {
       $(this).addClass('.flipped');

else $('.box').click(function() {

}
     });
*/
