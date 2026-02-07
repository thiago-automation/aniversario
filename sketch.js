let mostrarMensagem = false;
let particulas = [];
let botao;
let som;

function preload() {
  // 👉 troque o nome do arquivo se quiser outro som
  som = loadSound("piano.mp3"); // exemplo: loadSound("aniversario.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  
  for (let i = 0; i < 30; i++) {
    particulas.push({
      x: random(width),
      y: random(height),
      tamanho: random(6, 14),
      velocidade: random(0.3, 1),
      brilho: random(150, 255)
    });
  }
  
  botao = {
    x: width / 2,
    y: height * 0.55,
    w: width * 0.6,
    h: 55
  };
}

function draw() {
  setGradient(0, 0, width, height, color(255, 180, 200), color(180, 200, 255));
  
  noStroke();
  for (let p of particulas) {
    fill(255, 255, 255, p.brilho);
    ellipse(p.x, p.y, p.tamanho);
    p.y -= p.velocidade;
    if (p.y < -20) {
      p.y = height + 20;
      p.x = random(width);
    }
  }
  
  fill(60);
  textSize(width * 0.08);
  text("Você está convidado 🎉", width / 2, height * 0.18);
  
  textSize(width * 0.05);
  text("Aniversário da Miria 🎂", width / 2, height * 0.28);
  
  if (!mostrarMensagem) {
    drawButton();
  }
  
  if (mostrarMensagem) {
    drawCard();
  }
}

function drawButton() {
  fill(245);
  rect(botao.x, botao.y, botao.w, botao.h, 30);
  
  fill(120);
  textSize(width * 0.045);
  text("💌 Abrir convite", botao.x, botao.y);
}

function drawCard() {
  fill(255);
  rect(width / 2, height * 0.72, width * 0.85, height * 0.38, 30);
  
  fill(60);
  textSize(width * 0.045);
  text(
    "📅 15 de Fevereiro\n⏰ 12:30h\n📍 Rua Minas Gerais, 81\nColorado - PR\n\nTe espero 💖",
    width / 2,
    height * 0.72
  );
}

function mousePressed() {
  if (!mostrarMensagem) {
    let dentroDoBotao =
      mouseX > botao.x - botao.w / 2 &&
      mouseX < botao.x + botao.w / 2 &&
      mouseY > botao.y - botao.h / 2 &&
      mouseY < botao.y + botao.h / 2;
    
    if (dentroDoBotao) {
      mostrarMensagem = true;
      // 🔊 TOCA O SOM AO ABRIR
      if (!som.isPlaying()) {
        som.play();
      }
    }
  }
}

function setGradient(x, y, w, h, c1, c2) {
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
