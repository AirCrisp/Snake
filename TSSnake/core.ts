const enum Keys {
	LEFT_KEY = 37,
	UP_KEY = 38,
	RIGHT_KEY = 39,
	DOWN_KEY = 40}

class Core{
	play: boolean;
	score: number;
	mcontainer: string;
	matrixRows: number;
	matrixCols: number;
	scorecontainer: Element;
	matrix: Matrix;
	snake: Snake;
	IntID: number;
	apple: Apple;

	constructor(matrixcontID: string, rows: number, cols: number, scorecontID: string, startscore: number) {
		this.play = false;
		this.score = startscore || 0;
		this.mcontainer = matrixcontID;
		this.matrixRows = rows;
		this.matrixCols = cols;
		this.scorecontainer = document.querySelectorAll('#' + scorecontID + ' span')[0];
	}

	start() {
		this.play = true;

		this.matrix = new Matrix(this.mcontainer, this.matrixRows, this.matrixCols);
		this.matrix.display();

		this.scorecontainer.innerHTML = <string><any>this.score;

		this.snake = new Snake(this.matrix, 1, 1, 'right');
		this.snake.create();

		this.apple = new Apple(this.matrix);
		this.apple.display();

		var that: any = this;

		this.IntID = setInterval(function() {			
			if(that.snake.alive) {
				
				if((that.snake.body[0][0] == that.apple.body[0]) && (that.snake.body[0][1] == that.apple.body[1])){
					that.snake.eat();
					that.apple = new Apple(that.matrix);
					that.apple.display();
					that.score++;
					that.scorecontainer.innerHTML = <string><any>that.score;							
				};
				that.snake.move();
			} 
			else that.stop();
		}, 100);
	};

	changecourse(keycode: number) {
		if(this.snake.courseflag){
			switch(keycode) {
				case Keys.LEFT_KEY :
					if(this.snake.course != 'right') this.snake.course = 'left';
					break;
				case Keys.UP_KEY : 
					if(this.snake.course != 'down') this.snake.course = 'up';
					break;
				case Keys.RIGHT_KEY : 
					if(this.snake.course != 'left') this.snake.course = 'right';
					break;
				case Keys.DOWN_KEY : 
					if(this.snake.course != 'up') this.snake.course = 'down';
					break;			
				};
			this.snake.courseflag = false;
		};
	};

	stop(type: string) {
		this.play = false;
		this.score = 0;
		clearInterval(this.IntID);
		if(type == 'new game') alert('New game!')
		else alert('Game over!');
	};
};