var car;
var carX = 540;
var carY = 350;
var carR = 0;

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

    angleMode(DEGREES);

    switch (stage) {
        case 0:
            carY--;

            if( carY == 90 )
            {
                stage = 1;
            }
            break;
        case 1:
            carR--;
            carX -= 0.5;
            carY -= 0.5;
            if( carR == -90 )
            {
                stage = 2;
            }
            break;
        case 2:
            carX--;
            if( carX == 390 )
            {
                stage = 3;
            }
            break;
        case 3:
            carR--;
            carX -= 0.25;
            carY += 0.5;
            if( carR == -180 )
            {
                stage = 4;
            }
            break;
        case 4:
            carY++;
            if( carY == 200 )
            {
                stage = 5;
            }
            break;
        case 5:
            carY += 0.5;
            carX += 0.5;
            carR = carR == -190 ? carR : carR - 1 ;

            if( carY == 250 )
            {
                stage = 6;
            }
            break;
        case 6:
            carY += 0.5;
            carX -= 0.5;
            carR = carR == -90 ? carR : carR + 1 ;
            
            if( carY == 330 )
            {
                stage = 7;
            }
            break;
        case 7:
            carY -= 0.5;
            carX -= 0.5;
            
            carR = carR == 0 ? carR : carR + 1 ;
            
            if( carY == 250 )
            {
                stage = 8;
            }
            break;
        case 8:
            carY --;

            if( carY == 60 )
            {
                stage = 9;
            }
            break;
        case 9:
            carR--;
            carX -= 0.25;
            carY -= 0.25;
            if( carR == -90 )
            {
                stage = 10;
            }
            break;
        case 10:
            carX--;

            if( carX < 100 )
            {
                stage = 11;
            }
            break;
        case 11:
            carR--;
            carX -= 0.5;
            carY += 0.5;
            if( carR == -180 )
            {
                stage = 12;
            }
            break;
        case 12:
            carY++;
            if( carY > 350 )
            {
                stage = 13;
            }
            break;
    }

    translate( carX, carY );
    rotate( carR );

    image(car, 0, 0, 20, 36);
}