window.onload = function(){
	var game1 = new Core('matrix1', 20, 20, 'score', 0);
	game1.start();
	document.onkeydown = function(e){
		var event = e || window.event;
		game1.changecourse(event.keyCode);
	};
};