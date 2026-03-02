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


function preload() {
imgBG = "/background.jpg"
}

function setup() {
    cnv = new Canvas(height, width);

    wallLH = new Sprite(0, height / 2, 8, height, 'k');
    wallLH.color = 'black';

    wallRH = new Sprite(width, height / 2, 8, height, 'k');
    wallRH.color = 'black';

    wallTop = new Sprite(width / 2, 0, width, 8, 'k');
    wallTop.color = 'black';

    wallBot = new Sprite(width / 2, height, width, 8, 'k');
    wallBot.color = 'black';

}

function startGame(){

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