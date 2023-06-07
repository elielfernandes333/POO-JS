var fundoTela;
var player;
var municao;

function preload(){
  fundoTela = loadImage("./img/back.jpg");
}

function setup() {
  createCanvas(600, 400);
  player = new Nave(530, 310, "red");
  municao = [];
}

function draw(){
  background(fundoTela);
  player.show();
  gameControls();
  drawBullets();
  removeBulltes();
}

function keyPressed(){
  if(keyCode === 32){
    let b = new Bullet(player.xNave, player.yNave);
    municao.push(b);
  }
}
function gameControls(){
  if(keyIsDown(UP_ARROW)){
    player.yNave = player.yNave - 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    player.yNave = player.yNave + 3;
  }
}
function drawBullets(){
  for(let i = 0; i < municao.length; i++){
    municao[i].show();
    municao[i].automove(4);
  }
}
function removeBulltes(){
  for(let i = 0; i < municao; i++){
    if(municao[i].x < -5){
      municao.splice(i,1);
    }
  }
}