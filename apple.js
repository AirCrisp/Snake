function Apple(matrix, row, col){
	this.body = [row, col];
	var that = this;
	
	this.create = function()
	{
		matrix.setCell(that.body[0], that.body[1], true, 'apple');
	}
	
};