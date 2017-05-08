function Snake(matrix, row, col, course){
	this.body = [[row, col]];
	this.course = course;
	this.courseflag = true;
	this.alive = true;
	var that = this;
	
	this.create = function()
	{
		matrix.setCell(that.body[0][0], that.body[0][1], true, 'snake');
	}
	
	this.checkAlive = function(){
		var maxrows = matrix.rows;
		var maxcols = matrix.cols;

		if(that.body.length > 3){
			that.alive = !that.body.some(function(currentItem, index){
				if(index > 0)
					return (that.body[0][0] == currentItem[0] && that.body[0][1] == currentItem[1])
			});
		}

		if(that.body[0][0] < 1 || that.body[0][1] < 1 || 
			that.body[0][0] > maxcols || that.body[0][1] > maxrows)
			that.alive = false;

	};

	this.move = function()
	{
		that.courseflag = true;
		var last_body = that.body.slice();
		
		switch(that.course)
		{
			case 'right':
				that.body.unshift([that.body[0][0], that.body[0][1] + 1]);
				break;
			case 'left':
				that.body.unshift([that.body[0][0], that.body[0][1] - 1]);
				break;
			case 'up':
				that.body.unshift([that.body[0][0] - 1 , that.body[0][1]]);
				break;
			case 'down':
				that.body.unshift([that.body[0][0] + 1 , that.body[0][1]]);
				break;								
		}
		that.body.pop();
		that.checkAlive();

		if(that.alive){
				matrix.setCell(last_body[last_body.length - 1][0], last_body[last_body.length - 1][1], false, 'snake');
				matrix.setCell(that.body[0][0], that.body[0][1], true, 'snake');}
	}

	this.eat = function(){
		that.body.push(that.body[that.body.length - 1]);
		matrix.setCell(that.body[that.body.length - 1][0], that.body[that.body.length - 1][1], true, 'snake');
	};	
};