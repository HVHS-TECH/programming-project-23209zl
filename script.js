/*******************************************************/
// Game Project
/// Written by Jackson
/*******************************************************/

/*******************************************************/
// setup()
/*******************************************************/

//Variables
const height = 900;
const width = 900;
let time = 30;
let gameStarted = false;
let score = 0;


function preload() {
    imgBG = loadImage('background.jpg');
    imgBball = loadImage('bball.png');
    imgBackboard = loadImage('BballBackboard.png');
}

function setup() {
    cnv = new Canvas(width, height);

    wallLH = new Sprite(0, height / 2, 20, height, 'k');
    wallLH.color = 'blue';

    wallRH = new Sprite(width, height / 2, 20, height, 'k');
    wallRH.color = 'red';

    wallTop = new Sprite(width / 2, 0, width, 20, 'k');
    wallTop.color = 'blue';

    wallBot = new Sprite(width / 2, height, width, 20, 'k');
    wallBot.color = 'red';

    Bball = new Sprite(width / 2, 650, 100);
    Bball.image = (imgBball);
    imgBball.resize(80, 80);


    BballBackboard = new Sprite(width / 2, 300, 250, 150, 'k');
    BballBackboard.image = (imgBackboard);
    imgBackboard.resize(300, 250);

    StartBtn = new Sprite(width / 2, 800, 150, 50, 'k');
    StartBtn.color = '#b5fd84';
    StartBtn.text = 'Start Game';
    StartBtn.textSize = (25);
    StartBtn.visible = true;


}

/*******************************************************/
// endScreen()
/*******************************************************/


/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    background(imgBG);

    if (StartBtn.mouse.pressed()) {
        gameStarted = true;
        StartBtn.visible = false;
        BballBackboard.vel.x = 3;
        Bball.rotationSpeed = 3;
    }
    //When start button is pressed game starts

    if (gameStarted) {
        if (BballBackboard.x <= wallLH.x) {
            BballBackboard.vel.x = 3;
        }
        //When backboard center x position gets to left wall it goes right

        if (BballBackboard.x >= wallRH.x) {
            BballBackboard.vel.x = -3;
        }
        //When backboard center x position gets to right wall it goes left

        if (kb.presses('space')) {
            Bball.vel.y = -6;
        }
        //Shoots the basketball when space is pressed

        if (Bball.collides(wallTop)) {
            Bball.vel.y = 0;
            Bball.vel.x = 0;
            Bball.x = width / 2;
            Bball.rotationSpeed = 3;
            Bball.y = 650;
        }
        //Resets the basketball when hits top wall

        if (Bball.collides(BballBackboard)) {
            score = score + 1;
            Bball.vel.y = 0;
            Bball.x = width / 2;
            Bball.y = 650;
            Bball.vel.y = 0;
            Bball.vel.x = 0;
            Bball.x = width / 2;
            Bball.rotationSpeed = 3;
            Bball.y = 650;
        }
        //Resets the basketball when hits the backboard and adds the score
    }

}



/*******************************************************/
//  END OF APP
/*******************************************************/