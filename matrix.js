var Matrix = (function () {
    function Matrix(containerId, rows, cols) {
        this.containerId = containerId;
        this.container = document.getElementById(this.containerId);
        this.rows = rows;
        this.cols = cols;
    }
    Matrix.prototype.display = function () {
        var n = this.rows * this.cols;
        this.container.innerHTML = '';
        for (var i = 0; i < n; i++) {
            var div = document.createElement('div');
            div.className = 'cell';
            this.container.appendChild(div);
        }
    };
    Matrix.prototype.getCell = function (row, col) {
        if (this.container.childNodes[Math.round((row - 1) * this.cols + col - 1)].className == 'cell on')
            return true;
        return false;
    };
    Matrix.prototype.setCell = function (row, col, val, type) {
        var ind = (row - 1) * this.cols + col - 1;
        var matrix = document.getElementById(this.containerId);
        var cell = matrix.children[ind];
        var classOn;
        var classOff;
        switch (type) {
            case 'snake':
                classOn = 'cell on';
                classOff = 'cell';
                break;
            case 'apple':
                classOn = 'cell apple';
                classOff = 'cell';
                break;
        }
        ;
        cell.className = (val ? classOn : classOff);
    };
    return Matrix;
}());
;
//# sourceMappingURL=matrix.js.map