function Matrix(containerId, rows, cols){

	this.containerId = containerId;
	this.container = $('#' + this.containerId);
	this.rows = rows;
	this.cols = cols;
	var that = this;
	
	this.create = function()
	{
		var n = this.rows * this.cols;	
		
		that.container.html('');
		
		for (var i = 0; i < n; i++)
		{
			var div = document.createElement('div');
			div.className = 'cell';
			that.container.append(div);
		}
	}
	
	this.getCell = function(row, col)
	{
		if(that.container.children().eq((row-1)*that.cols+col-1).hasClass('cell on')) 
			return true;
		return false;
	}
	
	this.setCell = function(row, col, val, type)
	{
		var ind = (row - 1) * this.cols + col - 1;
		var matrix = $('#' + this.containerId);
		var cell = matrix.children().eq(ind);	
		var classOn;
		switch(type){
			case 'snake':
				classOn = 'on';
				break;
			case 'apple':
				classOn = 'apple';
				break;
		};

		cell.toggleClass(classOn, val);
	}	
};