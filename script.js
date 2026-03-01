function setup() {
cnv = new Canvas(900, 900);

wallLH = new Sprite(0, height/2, 8, height, 'k');
wallLH.color = 'black';

wallRH = new Sprite(width, height/2, 8, height, 'k');
wallRH.color = 'black';

wallTop = new Sprite(width/2, 0, width, 8, 'k');
wallTop.color = 'black';

wallBot = new Sprite(width/2, height, width, 8, 'k');
wallBot.color = 'black';

}

function draw() {
background('lightblue');
}

