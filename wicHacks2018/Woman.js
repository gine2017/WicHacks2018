class Woman {
    constructor(x, y, objWidth, objHeight, img) {
        //location
        this.x = x;
        this.y = y;
        //size
        this.objWidth = objWidth;
        this.objHeight = objHeight;
        //speed
        this.deltaSpeed = 10;
        //image
        this.image = img;
    }

    display(img, imgWidth, imgHeight) {
        image(img, this.x, this.y, imgWidth, imgHeight);
    }

    moveRight() {
        this.x += this.deltaSpeed;
    }

    moveLeft() {
        this.x -= this.deltaSpeed;
    }

    moveUp() {
        this.y -= this.deltaSpeed;
    }

    moveDown() {
        this.y += this.deltaSpeed;
    }

    locX() {
        return this.x;
    }

    locY() {
        return this.y;
    }

    //
    //    fallDown() {
    //        this.gravitySpeed += this.gravity;
    //        this.y += this.gravitySpeed;
    //        if (this.y > 600) {
    //            this.y = 600;
    //        }
    //    }

    //    jump() {
    //        if (this.y < 300) {
    //            
    //        }
    //    }
}
