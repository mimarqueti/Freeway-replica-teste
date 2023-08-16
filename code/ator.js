//código do ator

let pontuacao = 0

let yAtor = 366;
let xAtor = 100;
let diametro = 30;
let raio = diametro/2;

let colisao = false


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30,30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 2
  }
  if(keyIsDown(DOWN_ARROW)){
    yAtor += 2
  }
  if(keyIsDown(RIGHT_ARROW)){
    xAtor += 2
  }
  if(keyIsDown(LEFT_ARROW)){
    xAtor -= 2
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      somDaColisao.play();
      colidiu();
      if (pontuacao > 0){
        pontuacao -= 1;
      }
      
    }
  }
}

function colidiu(){
  yAtor = 366;
  
}

function quadroPonto(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,144,0));
  text(pontuacao, width/5, 30);
}

  

function ponto(){
  if (yAtor < 0){
    yAtor = 366;
    xAtor = 100;
    pontuacao += 1;
    somDoPonto.play();
  }
}

function verificaBordaAtor(){
  if (xAtor < 0) {
    xAtor = 1;
  }
  if (xAtor + diametro > width) {
    xAtor = width - diametro;
  }
  if (yAtor + diametro > height) {
    yAtor = height - diametro;
  }
}
  