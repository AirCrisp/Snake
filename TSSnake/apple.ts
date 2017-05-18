class Apple{
	body: number[];
	matrix: Matrix;

	constructor(matrix: Matrix){
		this.body = [Math.round(Math.random()*(matrix.rows - 1) + 1), Math.round(Math.random()*(matrix.cols - 1) + 1)];
		this.matrix = matrix;
	}
	
	display() {
		while(this.matrix.getCell(this.body[0], this.body[1]))
		{
			this.body = [Math.round(Math.random()*(this.matrix.rows - 1) + 1), Math.round(Math.random()*(this.matrix.cols - 1) + 1)]
		};
		this.matrix.setCell(this.body[0], this.body[1], true, 'apple');
	}
	
};