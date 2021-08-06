var car;
var carX = 550;
var carY = 350;

var stage = 0;

function preload() {
    car = loadImage("car.png");
}

function setup() {
    createCanvas(600, 400);

    background(220);

    quad(10, 10, 590, 10, 590, 390, 10, 390);

    line(500, 390, 500, 75);
    line(500, 75, 400, 75);
    line(400, 75, 400, 200);
    line(400, 200, 425, 200);
    line(425, 200, 425, 325);
    line(425, 325, 250, 325);
    line(250, 325, 250, 75);
    line(250, 75, 115, 75);
    line(115, 75, 115, 390);
    line(325, 10, 325, 250);
    circle(340, 250, 75);
}

function draw() {
    setup();

    image(car, carX, carY, 20, 36);

    switch (stage) {
        case 0:
            carY--;

            if( carY == 20 )
            {
                stage = 1;
            }
            break;
        case 1:
            
            break;
    }
}