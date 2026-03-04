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

}

function setup() {
    cnv = new Canvas(height, width);

    wallLH = new Sprite(0, height / 2, 20, height, 'k');
    wallLH.color = 'grey';

    wallRH = new Sprite(width, height / 2, 20, height, 'k');
    wallRH.color = 'grey';

    wallTop = new Sprite(width / 2, 0, width, 20, 'k');
    wallTop.color = 'grey';

    wallBot = new Sprite(width / 2, height, width, 20, 'k');
    wallBot.color = 'grey';

    Bball = new Sprite(width/2, 650, 100);
    Bball.color = 'orange';

    BballHoop = new Sprite(width/2, 300, 250, 150)
    BballHoop.color = 'white';
}


/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    background(imgBG);
}

/*******************************************************/
//  END OF APP
/*******************************************************/