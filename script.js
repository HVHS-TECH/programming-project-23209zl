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
const time = 90;

function preload() {
    imgBG = loadImage('../background.jpg');
    imgBball = loadImage('../bball.png');
    imgBackboard = loadImage('../BballBackboard.png');
}


function setup() {
    cnv = new Canvas(height, width);

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


    BballBackboard = new Sprite(width / 2, 300, 250, 150);
    BballBackboard.image = (imgBackboard);
    imgBackboard.resize(300, 250);


    if (startBtn.pressed) {
        BballBackground.vel.x = -6;
        BballBackground.vel.x = 6;

    }
}

/*******************************************************/
// timer()
/*******************************************************/




/*******************************************************/
// startButton()
/*******************************************************/




/*******************************************************/
// endScreen()
/*******************************************************/


/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    background(imgBG);
}

/*******************************************************/
//  END OF APP
/*******************************************************/