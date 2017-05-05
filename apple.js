function Apple(matrix){
	this.body = [parseInt(Math.random()*(matrix.rows - 1) + 1), parseInt(Math.random()*(matrix.cols - 1) + 1)];
	var that = this;
	
	this.create = function()
	{
		while(matrix.getCell(that.body[0], that.body[1]))
		{
			that.body = [parseInt(Math.random()*(matrix.rows - 1) + 1), parseInt(Math.random()*(matrix.cols - 1) + 1)]
		};
		matrix.setCell(that.body[0], that.body[1], true, 'apple');
	}
	
};