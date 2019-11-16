class SpriteContainer {
    sprites: Sprite[];
    keys: string[];
    fallback: Sprite;

    constructor() {
        this.sprites = [];
        this.keys = [];
        this.fallback = undefined;
        this.setFallback(this.createDefaultFallback());
    }

    setFallback(sprite: Sprite) {
        this.fallback = sprite;
    }

    addSprite(sprite: Sprite, name: string) {
        if(!this.isSpriteExists(name)){
            this.sprites.push(sprite);
            this.keys.push(name);
        }else{
            this.sprites[this.keys.indexOf(name)] = sprite;
        }
    }

    getSprite(name: string): Sprite {
        let index = this.keys.indexOf(name);
        if(index != -1){
            return this.sprites[index];
        }else if(this.fallback){
            return this.fallback;
        }else{
            throw new Error("Sprite not foiund and sprite container has no fallback");
        }
    }

    isSpriteExists(name: string): boolean {
        return this.keys.indexOf(name) !== -1;
    }

    createDefaultFallback(): Sprite {
        let image;
        image = createImage(64, 64);
        image.loadPixels();
        let alpha = 255;
        for (let y = 0; y < image.height; y++) {
            for (let x = 0; x < image.width; x++) {
                let index = (x + y * width) * 4;
                image.pixels[index] = 20;
                image.pixels[index + 1] = 200;
                image.pixels[index + 2] = 80;
                image.pixels[index + 3] = alpha;
            }
        }
        image.updatePixels();
        return new Sprite(image);
    }
}