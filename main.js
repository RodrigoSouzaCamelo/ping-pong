let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let keys = {};

let ball = {
	x: canvas.width / 2 - 15,
	y: canvas.height / 2 - 15,
	height: 30,
	width: 30,
	dirX: -1,
	dirY: 1,
	mod: 0,
	speed: 50,
};

let playerOne = {
	x: 10,
	y: canvas.height / 2 - 60,
	height: 120,
	width: 30,
	score: 0,
	speed: 15
};

let playerTwo = {
	x: 560,
	y: canvas.height / 2 - 60,
	height: 120,
	width: 30,
	score: 0,
	speed: 15
};

document.addEventListener("keydown", function(e){
	keys[e.keyCode] = true;	
});

document.addEventListener("keyup", function(e){
	delete keys[e.keyCode];
});

function moveBlock(){
	if(87 in keys && left.y > 0)
		left.y -= left.speed;
}

function toDraw() {
	ctx.fillStyle = "white";
	ctx.fillRect(playerOne.x, playerOne.y, playerOne.width, playerOne.height);
	ctx.fillRect(playerTwo.x, playerTwo.y, playerTwo.width, playerTwo.height);
	ctx.fillRect(ball.x, ball.y, ball.width, ball.height);

	ctx.font = "20px Arial";
	ctx.fillText("Player 1:" + left.score, 50, 20);
	ctx.fillText("Player 2:" + right.score, canvas.width - 150, 20);
}