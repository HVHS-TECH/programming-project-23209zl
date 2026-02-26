function preload() {

imgBG = loadImage('/background.jpg');

}


function setup() {
cnv = new Canvas(1000, 1500);

wallLH = new Sprite(0, 750, 8, 1500, 'k');
wallLH.color = 'black';

wallRH = new Sprite(1000, 750, 8, 1500, 'k');
wallRH.color = 'black';

wallTop = new Sprite(500, 0, 1000, 8, 'k');
wallTop.color = 'black';

wallBot = new Sprite(500, 1000, 1000, 8, 'k');
wallBot.color = 'black';

}

function draw() {
background(imgBG);
}