// variabili globali
// colori
var red, green, blue, yellow;
// posizione
var x, y;

function setup() {
  // impostazione del canvas
  createCanvas(800, 800);
  background('steelblue');
  // impostazione del mode
  ellipseMode(CENTER);
}

function draw() {
  // niente bordo
  strokeWeight(0);
  // definizione dei colori
  red = color(255, 0, 0);
  green = color(0, 128, 0);
  blue = color(0, 0, 255);
  yellow = color(255, 165, 0);
  // inizializzaione x e y
  x = width/ 2;
  y = height / 2;
  // cono BLU
  cono(x,y,blue);
  // cono VERDE
  push();
  translate(width, 0);
  rotate(PI / 2);
  cono(x,y,green);
  pop();
  // cono ROSSO
  push();
  translate(width, height);
  rotate(-PI);
  cono(x,y,red);
  pop();
  // cono GIALLO
  push();
  translate(0, height);
  rotate(-PI / 2);
  cono(x,y,yellow);
  pop();
}

function cono(_posX, _posY, _to) {
  for (let i = 20; i > 0; i--) {
    // diametro
    var _d = 10 * i;
    // definizione di x
    var _x = _posX - 12 * i;
    var _y = _posY;
    // definizione del colore con coseno e lerp
    var _from = color(255);
    angleMode(RADIANS);
    var _angle = i * (PI / 6);
    var _amt = abs(cos(_angle));
    var _c = lerpColor(_from, _to, _amt);
    fill(_c);
    // disegno del cono
    ellipse(_x, _y, _d);
  }
}
