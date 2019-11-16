class Player implements Renderable, Dynamic {
    pos: p5.Vector;
    sprite: Sprite;

    constructor(x: number, y: number) {
        this.pos = createVector(x, y);
        this.sprite = undefined;
    }

    setSprite(sprite: Sprite): void {
        this.sprite = sprite;
    }

    render(): void {
        this.sprite.render(this.pos.x, this.pos.y, this.sprite.size.x, this.sprite.size.y);
    }

    update(delta: number): void {
        this.pos.add(1);
    }
}