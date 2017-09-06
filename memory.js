var Tile = function(x, y) {
    this.x = x;
    this.y = y;
    this.width = 70;
};

Tile.prototype.drawFaceDown = function() {
    rect(this.x, this.y, this.width, this.width, 10);
    image(getImage("img/telegram.png"), this.x, this.y, this.width, this.width);
};

var tiles = [];
var NUM_COLS = 4;
var NUM_ROWS = 4;
for (var i = 0; i < NUM_COLS; i++) {
    for (var j = 0; j < NUM_ROWS; j++) {
        tiles.push(new Tile(i * 78 + 10, j * 78 + 40));
    }
}

for (var i = 0; i < tiles.length; i++) {
    tiles[i].drawFaceDown();
}
