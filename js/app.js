$(document).ready(function() {
 	$('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
		$('.ryu-ready').show();
  	})

  	.mouseleave(function() {
  		$('.ryu-ready').hide();
  		$('.ryu-still').show();
  	})

  	.mousedown(function(){ //WHY DOESN'T THIS ONE HAVE $('.XYZ') FIRST?	
  		playHadouken();  //play hadouken sound
  		$('.ryu-ready').hide();
  		$('.ryu-still').hide();
  		$('.ryu-throwing').show();
  		$('.hadouken').finish().show()
  		//show hadouken and animate it to the right of the screen
  			.animate(
	  		{'left': '300px'},
	  		500,
	  		//500ms - how long we want animation to be
	  		function() {
	  			$(this).hide();
	  			$(this).css('left', '-212px');
	  			//-212px is where hadouken starts - in main.css 
  			}
  		);
  	})

  	.mouseup(function(){
  		//ryu goes back to his ready position
  		$('.ryu-throwing').hide();
  		$('.ryu-ready').show();
});

//activate cool pose when x is pressed
  $(document).keydown(function() {
    if (event.which == 88 {
      $('.ryu-still').hide();
      $('.ryu-ready').hide();
      $('.ryu-throwing').hide();
      $('.ryu-cool').show();
      }
   });

  $(document).keyup(function() {
      if (event.which == 88) {
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
  })
});

function playHadouken () {
	  $('#hadouken-sound')[0].volume = 0.5;
	  $('#hadouken-sound')[0].load();
	  $('#hadouken-sound')[0].play();
}

