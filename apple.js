var Apple = (function () {
    function Apple(matrix) {
        this.body = [Number(Math.random() * (matrix.rows - 1) + 1), Number(Math.random() * (matrix.cols - 1) + 1)];
        this.matrix = matrix;
    }
    Apple.prototype.display = function () {
        while (this.matrix.getCell(this.body[0], this.body[1])) {
            this.body = [Number(Math.random() * (this.matrix.rows - 1) + 1), Number(Math.random() * (this.matrix.cols - 1) + 1)];
        }
        ;
        this.matrix.setCell(this.body[0], this.body[1], true, 'apple');
    };
    return Apple;
}());
;
//# sourceMappingURL=apple.js.map