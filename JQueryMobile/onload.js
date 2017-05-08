LEFT_KEY = 37;
UP_KEY = 38;
RIGHT_KEY = 39;
DOWN_KEY = 40;

window.onload = function(){
	var game1 = new Core('matrix1', 20, 20, 'score', 0);
	var matrix = new Matrix('matrix1', 20, 20);
	matrix.create();

	$("#newGame").click(function(){
			$(this).blur();
			$('#matrix1').focus();
			if(game1.play) game1.stop('new game');
			game1.start();
			$(document).on('swipeleft', function(){game1.changecourse(LEFT_KEY);});
			$(document).on('swipeup', function(){game1.changecourse(UP_KEY);});
			$(document).on('swiperight', function(){game1.changecourse(RIGHT_KEY);});
			$(document).on('swipedown', function(){game1.changecourse(DOWN_KEY);});
			$(document).keydown(function(e){
				var event = e || window.event;
				game1.changecourse(event.keyCode)
			});
		});
};



// $('#mydiv').on('swipedown',function(){alert("swipedown..");} );
// $('#mydiv').on('swipeup',function(){alert("swipeup..");} );