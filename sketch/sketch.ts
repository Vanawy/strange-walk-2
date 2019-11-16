let player: Player;
let sc: SpriteContainer;

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