LEFT_KEY = 37;
UP_KEY = 38;
RIGHT_KEY = 39;
DOWN_KEY = 40;

function Core(matrixcontID, rows, cols, scorecontID, startscore){
	this.play = false;
	this.score = startscore || 0;
	this.mcontainer = matrixcontID;
	this.matrixRows = rows;
	this.matrixCols = cols;
	this.scorecontainer = document.querySelectorAll('#' + scorecontID + ' span')[0];
	this.matrix;
	this.snake;
	this.IntID;
	this.apple;

	var that = this;

	this.start = function(){
		that.play = true;

		that.matrix = new Matrix(that.mcontainer, this.matrixRows, this.matrixCols);
		that.matrix.create();

		that.scorecontainer.innerHTML = that.score;

		that.snake = new Snake(that.matrix, 1, 1, 'right');
		that.snake.create();

		that.apple = new Apple(that.matrix, parseInt(Math.random()*(that.matrixRows - 1) + 1), parseInt(Math.random()*(that.matrixCols - 1) + 1));
		that.apple.create();

		that.IntID = setInterval(function() {
			if(that.snake.alive) {
				
				if((that.snake.body[0][0] == that.apple.body[0]) && (that.snake.body[0][1] == that.apple.body[1])){
					that.snake.eat();
					that.apple = new Apple(that.matrix, parseInt(Math.random()*that.matrixRows + 1), parseInt(Math.random()*that.matrixCols + 1));
					that.apple.create();
					that.score++;
					that.scorecontainer.innerHTML = that.score;							
				};
				that.snake.move();
			} 
			else that.stop();
		}, 200);
	};

	this.changecourse = function(keycode){
		switch(keycode) {
			case LEFT_KEY :
				that.snake.course = 'left';
				break;
			case UP_KEY : 
				that.snake.course = 'up';
				break;
			case RIGHT_KEY : 
				that.snake.course = 'right';
				break;
			case DOWN_KEY : 
				that.snake.course = 'down';
				break;			
		};
	};

	this.stop = function(){
		that.play = false;
		clearInterval(that.IntID);
		alert('Game over!');
	};
};