/**
 * FirstName LastName
 * IGME-102: Assignment Name, m/d/18
 * Summary of sketch activity
 */

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
//for background
//fps for movement
var cloudxPos = 100;
var cloudxPos1 = 130;
var cloudxPos2 = 70
var cloud2xPos = 800;
var cloud2xPos1 = 830;
var cloud2xPos2 = 770;

let screenWidth = 1000;
let screenHeight = 800;

//for functionality
let nancy;
let nancyImage;
let nancyLeftImage;
let nancyRightImage;
let currentImage;
let currentWidth;
let currentHeight;
let dbag; 
let dbagImage;

let money;
let moneyImage;

let locationX;
let locationY;

let score;
let menScore;


let jumping = false;

let cash;
let cashArray = [];
let cashAmount;

let randomX;
let randomY;

function preload() {
    nancyImage = loadImage('nancy.png');
    nancyLeftImage = loadImage('nancyLeft.png');
    nancyRightImage = loadImage('nancyRight.png');
    moneyImage = loadImage('80centmoney.png');
    dbagImage = loadImage('kyle.png');
}

function setup() {
    //background
    createCanvas(windowWidth, windowHeight);
    frameRate(30);

    //put setup code here
    locationX = 50;
    locationY = 450;
    cashAmount = 5;
    score = 0;
    menScore = 0;

    currentImage = nancyImage;

    nancy = new Woman(locationX, locationY, 50, 200, currentImage);
    dbag = new Woman(900, locationY, 50, 200, dbagImage);

    randomX = random(width);
    randomY = random(height);

    for (let i = 0; i < cashAmount; i++) {
        cashArray.push(new Money(moneyImage, randomX, randomY));
    }
}

/**
 * draw : Loops forever; called automatically
 * Summarize code that you add
 */
function draw() {
    prettySky();
    dbag.display(dbagImage, currentWidth + 20, currentHeight + 20)

    nancy.display(currentImage, currentWidth, currentHeight);
    for (let i = 0; i < cashAmount; i++) {
        cashArray[i].display();
        cashArray[i].move();
    }

    if (keyIsDown(LEFT_ARROW)) {
        nancy.moveLeft();
        locationX -= 10;
        currentImage = nancyLeftImage;
        currentWidth = 100;
        currentHeight = 200;
    } else if (keyIsDown(RIGHT_ARROW)) {
        nancy.moveRight();
        locationX += 10;
        currentImage = nancyRightImage;
        currentWidth = 100;
        currentHeight = 200;
    } else if (keyIsDown(UP_ARROW)) {
        locationY -= 10;
        if (locationY < 200) {
            nancy.locY = 200;
            locationY = 200;
        } else {
            nancy.moveUp();
            locationY -= 10;
        }
    } else if (keyIsDown(DOWN_ARROW)) {
        locationY += 10;
        if (locationY > 600) {
            nancy.locY = 600;
            locationY = 600;
        } else {
            nancy.moveDown();
            locationY += 10;
        }
    } else {
        currentImage = nancyImage;
        currentWidth = 50;
        currentHeight = 200;
    }
    
    
    if (keyIsDown('a')) {
        nancy.moveLeft();
        locationX -= 10;
        currentImage = nancyLeftImage;
        currentWidth = 100;
        currentHeight = 200;
    } else if (keyIsDown('d')) {
        nancy.moveRight();
        locationX += 10;
        currentImage = nancyRightImage;
        currentWidth = 100;
        currentHeight = 200;
    } else if (keyIsDown('w')) {
        locationY -= 10;
        if (locationY < 300) {
            nancy.locY = 300;
            locationY = 300;
        } else {
            nancy.moveUp();
            locationY -= 10;
        }
    } else if (keyIsDown('s')) {
        locationY += 10;
        if (locationY > 600) {
            nancy.locY = 600;
            locationY = 600;
        } else {
            nancy.moveDown();
            locationY += 10;
        }
    } else {
        currentImage = nancyImage;
        currentWidth = 50;
        currentHeight = 200;
    }


    //colliding
    let s;
    let v;
    for (let i = 0; i < cashArray.length; i++) {
        cashArray[i].display();
        if (cashArray[i].collide(locationX, locationY, currentWidth) == true) {
            s = Math.round(score += 0.8).toFixed(2);
            menScore++;
            v = parseFloat(s);
            //console.log(score);
        }
        cashArray[i].relocate(randomX, randomY, moneyImage, score);
    }

    textSize(32);
    fill(0);
    text('Score: $ ' + score, 10, 750);
    text('Man Score: $ ' + menScore, 10, 780);
    fill(255, 0, 0);
    text("Women EARN .8 of a Man's dollar", 500, 750);

    fill(36, 186, 32);
    if (score < 10) {
        rect(202, 725, 250, 30);
    }
    if (score < 100) {
        rect(216, 725, 250, 30);
    } else if (score < 1000) {
        rect(237, 725, 250, 30);
    }
    
    
    
}

function prettySky() {
    noStroke();
    background(36, 186, 32);
    fill("#00111a");
    rect(0, 0, screenWidth, 25);
    fill("#002333");
    rect(0, 25, screenWidth, 25);
    fill("#00344d");
    rect(0, 50, screenWidth, 25);
    fill("#004666");
    rect(0, 75, screenWidth, 25);
    fill("#005780");
    rect(0, 100, screenWidth, 25);
    fill("#006999");
    rect(0, 125, screenWidth, 25);
    fill("#007ab3");
    rect(0, 150, screenWidth, 25);
    fill("#008bcc");
    rect(0, 175, screenWidth, 25);
    fill("#009de6");
    rect(0, 200, screenWidth, 25);
    fill(0, 174, 255);
    rect(0, 225, screenWidth, 25);
    fill(26, 182, 255)
    rect(0, 250, screenWidth, 25);
    fill(51, 190, 255);
    rect(0, 275, screenWidth, 25);
    fill(77, 198, 255);
    rect(0, 300, screenWidth, 25);
    fill(102, 207, 255);
    rect(0, 325, screenWidth, 25);
    fill(128, 215, 255);
    rect(0, 350, screenWidth, 25);
    fill(153, 223, 255);
    rect(0, 375, screenWidth, 25);
    fill(179, 231, 255);
    rect(0, 400, screenWidth, 25);
    fill(204, 239, 255);
    rect(0, 425, screenWidth, 25);
    fill("#e6f7ff");
    rect(0, 450, screenWidth, 25);
    fill(255, 255, 255);
    rect(0, 475, screenWidth, 25);

    //cloud movement
    fill(255, 255, 255);
    cloudxPos -= 3;
    cloudxPos1 -= 3;
    cloudxPos2 -= 3;
    cloud2xPos -= 3;
    cloud2xPos1 -= 3;
    cloud2xPos2 -= 3;

    //cloud One 
    noStroke();
    ellipse(cloudxPos, 100, 55, 55);
    ellipse(cloudxPos1, 115, 40, 40);
    ellipse(cloudxPos2, 115, 40, 40);

    //cloud Two
    ellipse(cloud2xPos, 140, 55, 55);
    ellipse(cloud2xPos1, 155, 40, 40);
    ellipse(cloud2xPos2, 155, 40, 40);

    //ground platform 
    fill(36, 186, 32);
    rect(0, 900, screenWidth, 300);

    /***
    if all the xpositions are greater than the window width then call set the c position to where the first cloud was  
    **/

    //update switch the direction

    if (cloudxPos < 0 && cloudxPos1 < 0 && cloudxPos2 < 0) {
        //background(102,158,249);
        cloudxPos = screenWidth;
        cloudxPos1 = screenWidth + 30;
        cloudxPos2 = screenWidth - 30;

    }
    if (cloud2xPos < 0 && cloud2xPos1 < 0 && cloud2xPos2 < 0) {
        cloud2xPos = screenWidth;
        cloud2xPos1 = screenWidth + 30;
        cloud2xPos2 = screenWidth - 30;
    }
}

function windowResized() {
    resizeCanvas(screenWidth, screenHeight);
}
