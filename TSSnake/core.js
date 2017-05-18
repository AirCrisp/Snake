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
        this.play = true;
        this.matrix = new Matrix(this.mcontainer, this.matrixRows, this.matrixCols);
        this.matrix.display();
        this.scorecontainer.innerHTML = this.score;
        this.snake = new Snake(this.matrix, 1, 1, 'right');
        this.snake.create();
        this.apple = new Apple(this.matrix);
        this.apple.display();
        var that = this;
        this.IntID = setInterval(function () {
            if (that.snake.alive) {
                if ((that.snake.body[0][0] == that.apple.body[0]) && (that.snake.body[0][1] == that.apple.body[1])) {
                    that.snake.eat();
                    that.apple = new Apple(that.matrix);
                    that.apple.display();
                    that.score++;
                    that.scorecontainer.innerHTML = that.score;
                }
                ;
                that.snake.move();
            }
            else
                that.stop();
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