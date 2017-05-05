function Matrix(containerId, rows, cols){

	this.containerId = containerId;
	this.rows = rows;
	this.cols = cols;
	var that = this;
	
	this.create = function()
	{
		var matrix = document.getElementById(this.containerId);
		var n = this.rows * this.cols;	
		
		matrix.innerHTML = '';
		
		for (var i = 0; i < n; i++)
		{
			var div = document.createElement('div');
			div.className = 'cell';
			matrix.appendChild(div);
		}
	}
	
	this.getCell = function(row, col)
	{

	}
	
	this.setCell = function(row, col, val, type)
	{
		var ind = (row - 1) * this.cols + col - 1;
		var matrix = document.getElementById(this.containerId);
		var cell = matrix.children[ind];	
		var classOn;
		var classOff;
		switch(type){
			case 'snake':
				classOn = 'cell on';
				classOff = 'cell';
				break;
			case 'apple':
				classOn = 'cell apple';
				classOff = 'cell';
				break;
		};
		cell.className = (val ? classOn : classOff);
	}	
};