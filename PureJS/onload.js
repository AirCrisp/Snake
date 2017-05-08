window.onload = function(){
	var game1 = new Core('matrix1', 20, 20, 'score', 0);
	var matrix = new Matrix('matrix1', 20, 20);
	matrix.create();
	
	document.getElementById('newGame').onclick = function(){
		if(game1.play) game1.stop('new game');
		game1.start();
		document.onkeydown = function(e){
			var event = e || window.event;
			game1.changecourse(event.keyCode);
		};
	};
};