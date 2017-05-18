window.onload = function(){
	var game1: Core = new Core('matrix1', 20, 20, 'score', 0);
	var matrix: Matrix = new Matrix('matrix1', 20, 20);
	matrix.display();
	
	document.getElementById('newGame').onclick = function(){
		if(game1.play) game1.stop('new game');
		game1.start();
		document.onkeydown = function(e: KeyboardEvent){
			var event: any = e || window.event;
			game1.changecourse(event.keyCode);
		};
	};
};