class Money {
    constructor(img, x, y) {
        this.x = x;
        this.y = y;
        this.num = 10;
        this.image = img;
        this.objWidth = 50;
        this.objHeight = 30;
        
        this.xOff = random(100);
        this.yOff = random(100);
        
        //incrementing 
        this.xyInc = 0.006;
        
        //scale perlin noise 
        this.x = noise(this.xOff) * 1000;
        this.y = noise(this.yOff) * 1000;
    }

    myPush(item) {
        this.stkArray.push(item);
    }

    display() {
        image(this.image, this.x, this.y, this.objWidth, this.objHeight);
    }
    
    move() {
        //moving in the x direction
        this.xOff = this.xOff + this.xyInc;
        this.x = noise(this.xOff) * width;
        
        //moving in the y direction
        this.yOff = this.yOff + this.xyInc;
        this.y = noise(this.yOff) * height;
    }
    
    collide(x, y, imgWidth) {
        if (this.x + this.objWidth / 2.5 > x - imgWidth / 2.5 &&
            this.x - this.objWidth / 2.5 < x + imgWidth / 2.5 &&
            this.y + this.objHeight / 2.5 > y - imgWidth / 2.5 &&
            this.y - this.objHeight / 2.5 < y + imgWidth / 2.5) {
            return true;
        } else {
            return false;
        }
    }

    relocate(locationX, locationY, imgSize, point) {
        if (this.collide(locationX, locationY, imgSize) == true) {
            point = point + 0.8;
            this.xOff = random(200);
            this.yOff = random(200);
        }
    }
    
}
