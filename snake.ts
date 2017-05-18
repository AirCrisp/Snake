class Snake {
	body: number[][];
	course: string;
	courseflag: boolean;
	alive: boolean;
	matrix: Matrix;
	
	constructor(matrix: Matrix, row: number, col: number, course: string){
		this.body = [[row, col]];
		this.course = course;
		this.courseflag = true;
		this.alive = true;
		this.matrix = matrix;
	}

	create() {
		this.matrix.setCell(this.body[0][0], this.body[0][1], true, 'snake');
	}
	
	checkAlive() {
		var maxrows:number = this.matrix.rows;
		var maxcols:number = this.matrix.cols;

		if(this.body.length > 3){
			this.alive = !this.body.some(function(currentItem, index: number){
				if(index > 0)
					return (this.body[0][0] == currentItem[0] && this.body[0][1] == currentItem[1])
			}, this);
		}

		if(this.body[0][0] < 1 || this.body[0][1] < 1 || 
			this.body[0][0] > maxcols || this.body[0][1] > maxrows)
			this.alive = false;

	};

	move() {
		this.courseflag = true;
		var last_body = this.body.slice();
		
		switch(this.course)
		{
			case 'right':
				this.body.unshift([this.body[0][0], this.body[0][1] + 1]);
				break;
			case 'left':
				this.body.unshift([this.body[0][0], this.body[0][1] - 1]);
				break;
			case 'up':
				this.body.unshift([this.body[0][0] - 1 , this.body[0][1]]);
				break;
			case 'down':
				this.body.unshift([this.body[0][0] + 1 , this.body[0][1]]);
				break;								
		}
		this.body.pop();
		this.checkAlive();

		if(this.alive){
				this.matrix.setCell(last_body[last_body.length - 1][0], last_body[last_body.length - 1][1], false, 'snake');
				this.matrix.setCell(this.body[0][0], this.body[0][1], true, 'snake');}
	}

	eat(){
		this.body.push(this.body[this.body.length - 1]);
		this.matrix.setCell(this.body[this.body.length - 1][0], this.body[this.body.length - 1][1], true, 'snake');
	};	
};