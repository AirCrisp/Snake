class Matrix {
	
	containerId: string;
	container: any;
	rows: number;
	cols: number;

	constructor(containerId: string, rows: number, cols: number) {
		this.containerId = containerId;
		this.container = document.getElementById(this.containerId);
		this.rows = rows;
		this.cols = cols;
	}

	display() {
		var n:number = this.rows * this.cols;	
		
		this.container.innerHTML = '';
		
		for (var i:number = 0; i < n; i++)
		{
			var div = document.createElement('div');
			div.className = 'cell';
			this.container.appendChild(div);
		}
	}
	
	getCell(row: number, col: number) {
		if(this.container.childNodes[Math.round((row-1)*this.cols+col-1)].className == 'cell on') 
			return true;
		return false;
	}
	
	setCell(row: number, col: number, val: boolean, type: string) {
		var ind:number = (row - 1) * this.cols + col - 1;
		var matrix = document.getElementById(this.containerId);
		var cell = matrix.children[ind];	
		var classOn: string;
		var classOff: string;
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