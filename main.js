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
	speed: 1,
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

document.addEventListener("keydown", function (e) {
	keys[e.keyCode] = true;
});

document.addEventListener("keyup", function (e) {
	delete keys[e.keyCode];
});

function moveBlock() {
	if (87 in keys && playerOne.y > 0)
		playerOne.y -= playerOne.speed;

	if (83 in keys && playerOne.y + playerOne.height < canvas.height)
		playerOne.y += playerOne.speed;

	if (38 in keys && playerTwo.y > 0)
		playerTwo.y -= playerTwo.speed;

	if (40 in keys && playerTwo.y + playerTwo.height < canvas.height)
		playerTwo.y += playerTwo.speed;
}

function moveBall(){
	if(ball.y + ball.height >= playerOne.y && ball.y <= playerOne.y + playerOne.height && ball.x <= playerOne.x + playerOne.height){
		ball.dirX = 1;
		ball.mod += 0.2;
	}
	
	else if(ball.y + ball.height >= playerTwo.y && ball.y <= playerTwo.y + playerTwo.height && ball.x + ball.height >= playerTwo.x){
		ball.dirX = -1;
		ball.mod += 0.2
	}

	if(ball.y <= 0)
		ball.dirY = 1;

	else if(ball.y + ball.height >= canvas.height)
		ball.dirY = -1;
		
	ball.x += (ball.speed + ball.mod) * ball.dirX;
	ball.y += (ball.speed + ball.mod) * ball.dirY;

	if(ball.x < playerOne.x + playerOne.height){
		newGame("Player 2");
	} else if(ball.x + ball.height > playerTwo.x) {
		newGame("Player 1");
	}
}

function newGame(winner){
	if(winner == "Player 1")
		playerOne.score++;
	else
		playerTwo.score++;

	playerOne.y = canvas.height / 2 - playerOne.height / 2;
	playerTwo.y = playerOne.y;
	ball.y = canvas.height / 2 - ball.height / 2;
	ball.x = canvas.height / 2 - ball.height / 2;
	ball.mod = 0;
}

function toDraw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	moveBlock();
	moveBall();

	ctx.fillStyle = "white";
	ctx.fillRect(playerOne.x, playerOne.y, playerOne.width, playerOne.height);
	ctx.fillRect(playerTwo.x, playerTwo.y, playerTwo.width, playerTwo.height);
	ctx.fillRect(ball.x, ball.y, ball.width, ball.height);

	ctx.font = "20px Arial";
	ctx.fillText("Player 1:" + playerOne.score, 50, 20);
	ctx.fillText("Player 2:" + playerTwo.score, canvas.width - 150, 20);
}

setInterval(toDraw, 20);