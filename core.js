var Keys;
(function (Keys) {
    Keys[Keys["LEFT_KEY"] = 37] = "LEFT_KEY";
    Keys[Keys["UP_KEY"] = 38] = "UP_KEY";
    Keys[Keys["RIGHT_KEY"] = 39] = "RIGHT_KEY";
    Keys[Keys["DOWN_KEY"] = 40] = "DOWN_KEY";
})(Keys || (Keys = {}));
var Core = (function () {
    function Core(matrixcontID, rows, cols, scorecontID, startscore) {
        this.play = false;
        this.score = startscore || 0;
        this.mcontainer = matrixcontID;
        this.matrixRows = rows;
        this.matrixCols = cols;
        this.scorecontainer = document.querySelectorAll('#' + scorecontID + ' span')[0];
    }
    Core.prototype.start = function () {
        var _this = this;
        this.play = true;
        this.matrix = new Matrix(this.mcontainer, this.matrixRows, this.matrixCols);
        this.matrix.display();
        this.scorecontainer.innerHTML = this.score;
        this.snake = new Snake(this.matrix, 1, 1, 'right');
        this.snake.create();
        this.apple = new Apple(this.matrix);
        this.apple.display();
        this.IntID = setInterval(function () {
            if (_this.snake.alive) {
                if ((_this.snake.body[0][0] == _this.apple.body[0]) && (_this.snake.body[0][1] == _this.apple.body[1])) {
                    _this.snake.eat();
                    _this.apple = new Apple(_this.matrix, Number(Math.random() * _this.matrixRows + 1), Number(Math.random() * _this.matrixCols + 1));
                    _this.apple.display();
                    _this.score++;
                    _this.scorecontainer.innerHTML = _this.score;
                }
                ;
                _this.snake.move();
            }
            else
                _this.stop();
        }, 100);
    };
    ;
    Core.prototype.changecourse = function (keycode) {
        if (this.snake.courseflag) {
            switch (keycode) {
                case 37:
                    if (this.snake.course != 'right')
                        this.snake.course = 'left';
                    break;
                case 38:
                    if (this.snake.course != 'down')
                        this.snake.course = 'up';
                    break;
                case 39:
                    if (this.snake.course != 'left')
                        this.snake.course = 'right';
                    break;
                case 40:
                    if (this.snake.course != 'up')
                        this.snake.course = 'down';
                    break;
            }
            ;
            this.snake.courseflag = false;
        }
        ;
    };
    ;
    Core.prototype.stop = function (type) {
        this.play = false;
        this.score = 0;
        clearInterval(this.IntID);
        if (type == 'new game')
            alert('New game!');
        else
            alert('Game over!');
    };
    ;
    return Core;
}());
;
//# sourceMappingURL=core.js.map