


$(document).ready(function() {
  //   var click1, click2, fouls=8;
  //   function isMatched(card1, card2) {
  // //This needs to return tru or false to see if click1 and click2 match
  // }

// function checkFouls( ) {}


// function timerInitialize () {}

//Function for card flip animation
    function animateFlip(card) {
            $(card).toggleClass('flipped');
            $(card).children().toggleClass('name');
    }



    $('.card').click(function( ) {
        animateFlip(this);
    });
});

    //     if (click1) {
    //     click1= this.className;
    //   }
    //     else {
    //      click2 = this.className;
    //      if (isMatched(click1, click2)) {
        //If true than change class to permanently open
        //if false change class to Not Flipped and remove one fouls
        // check foul number






/*  Code used for toggling class to flipped.
    $('.card').click(function() {
        $(this).toggleClass('flipped');
    })
});


/*

$(document).ready(function() {

$('.box').hasClass('.notflipped');

if $('.box').click(function( ) {
       $(this).addClass('.flipped');

else $('.box').click(function() {

}
     });
*/
