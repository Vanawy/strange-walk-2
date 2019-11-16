var player;
var sc;
function setup() {
    createCanvas(640, 480);
    sc = new SpriteContainer();
    player = new Player(200, 200);
    player.setSprite(sc.getSprite("player"));
}
function draw() {
    background(100);
    player.render();
    player.update(1);
}
var GameObject = (function () {
    function GameObject(x, y) {
        this.pos = createVector(x, y);
    }
    return GameObject;
}());
var Player = (function () {
    function Player(x, y) {
        this.pos = createVector(x, y);
        this.sprite = undefined;
    }
    Player.prototype.setSprite = function (sprite) {
        this.sprite = sprite;
    };
    Player.prototype.render = function () {
        this.sprite.render(this.pos.x, this.pos.y, this.sprite.size.x, this.sprite.size.y);
    };
    Player.prototype.update = function (delta) {
        this.pos.add(1);
    };
    return Player;
}());
var Sprite = (function () {
    function Sprite(image, w, h) {
        this.image = image;
        this.size = createVector(w || image.width, h || image.height);
    }
    Sprite.prototype.render = function (x, y, width, height) {
        image(this.image, x, y, width, height);
    };
    return Sprite;
}());
var SpriteContainer = (function () {
    function SpriteContainer() {
        this.sprites = [];
        this.keys = [];
        this.fallback = undefined;
        this.setFallback(this.createDefaultFallback());
    }
    SpriteContainer.prototype.setFallback = function (sprite) {
        this.fallback = sprite;
    };
    SpriteContainer.prototype.addSprite = function (sprite, name) {
        if (!this.isSpriteExists(name)) {
            this.sprites.push(sprite);
            this.keys.push(name);
        }
        else {
            this.sprites[this.keys.indexOf(name)] = sprite;
        }
    };
    SpriteContainer.prototype.getSprite = function (name) {
        var index = this.keys.indexOf(name);
        if (index != -1) {
            return this.sprites[index];
        }
        else if (this.fallback) {
            return this.fallback;
        }
        else {
            throw new Error("Sprite not foiund and sprite container has no fallback");
        }
    };
    SpriteContainer.prototype.isSpriteExists = function (name) {
        return this.keys.indexOf(name) !== -1;
    };
    SpriteContainer.prototype.createDefaultFallback = function () {
        var image;
        image = createImage(64, 64);
        image.loadPixels();
        var alpha = 255;
        for (var y = 0; y < image.height; y++) {
            for (var x = 0; x < image.width; x++) {
                var index = (x + y * width) * 4;
                image.pixels[index] = 20;
                image.pixels[index + 1] = 200;
                image.pixels[index + 2] = 80;
                image.pixels[index + 3] = alpha;
            }
        }
        image.updatePixels();
        return new Sprite(image);
    };
    return SpriteContainer;
}());
//# sourceMappingURL=build.js.map