var Snake = (function () {
    function Snake(matrix, row, col, course) {
        this.body = [[row, col]];
        this.course = course;
        this.courseflag = true;
        this.alive = true;
        this.matrix = matrix;
    }
    Snake.prototype.create = function () {
        this.matrix.setCell(this.body[0][0], this.body[0][1], true, 'snake');
    };
    Snake.prototype.checkAlive = function () {
        var maxrows = this.matrix.rows;
        var maxcols = this.matrix.cols;
        if (this.body.length > 3) {
            this.alive = !this.body.some(function (currentItem, index) {
                if (index > 0)
                    return (this.body[0][0] == currentItem[0] && this.body[0][1] == currentItem[1]);
            }, this);
        }
        if (this.body[0][0] < 1 || this.body[0][1] < 1 ||
            this.body[0][0] > maxcols || this.body[0][1] > maxrows)
            this.alive = false;
    };
    ;
    Snake.prototype.move = function () {
        this.courseflag = true;
        var last_body = this.body.slice();
        switch (this.course) {
            case 'right':
                this.body.unshift([this.body[0][0], this.body[0][1] + 1]);
                break;
            case 'left':
                this.body.unshift([this.body[0][0], this.body[0][1] - 1]);
                break;
            case 'up':
                this.body.unshift([this.body[0][0] - 1, this.body[0][1]]);
                break;
            case 'down':
                this.body.unshift([this.body[0][0] + 1, this.body[0][1]]);
                break;
        }
        this.body.pop();
        this.checkAlive();
        if (this.alive) {
            this.matrix.setCell(last_body[last_body.length - 1][0], last_body[last_body.length - 1][1], false, 'snake');
            this.matrix.setCell(this.body[0][0], this.body[0][1], true, 'snake');
        }
    };
    Snake.prototype.eat = function () {
        this.body.push(this.body[this.body.length - 1]);
        this.matrix.setCell(this.body[this.body.length - 1][0], this.body[this.body.length - 1][1], true, 'snake');
    };
    ;
    return Snake;
}());
;
//# sourceMappingURL=snake.js.map