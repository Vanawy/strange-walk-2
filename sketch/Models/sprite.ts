class Sprite {

    image: p5.Image;
    size: p5.Vector;

    constructor(image: p5.Image, w?: number, h?: number) {
        this.image = image;
        this.size = createVector(w || image.width, h || image.height)
    }

    render(
        x: number, 
        y: number, 
        width: number, 
        height: number
    ) {
        image(this.image, x, y, width, height);
    }
}