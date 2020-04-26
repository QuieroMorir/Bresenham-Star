const P1 = {x: 0, y: 0};
const P2 = {x: 0, y: 0};
const P3 = {x: 0, y: 0};
const P4 = {x: 0, y: 0};
const P5 = {x: 0, y: 0};
const P6 = {x: 0, y: 0};
const P7 = {x: 0, y: 0};
const P8 = {x: 0, y: 0};

function setup() {
  createCanvas(windowWidth, windowHeight)
  P2.x=windowWidth;
  P2.y=windowHeight;
  P3.y=windowHeight;
  P4.x=windowWidth;
  P5.x=Math.floor(windowWidth / 2);
  P6.x=Math.floor(windowWidth / 2);
  P6.y=windowHeight;
  P7.y=Math.floor(windowHeight / 2);
  P8.x=windowWidth;
  P8.y=Math.floor(windowHeight / 2);
}

function draw(){
  clear();
  //background(51);
  bresenham(P1, P2);
  bresenham(P3, P4);
  bresenham(P5, P6);
  bresenham(P7, P8); 
}

function mousePressed() {
  clear();
  console.log("Limpia la pantalla")
}

function bresenham(p1, p2){
  const dx = p2.x - p1.x;
  const dx2 = dx * 2;
  const dy = p2.y - p1.y;
  const dy2 = dy * 2;
  const half = Math.abs(dy / dx);
  
  let x = p1.x;
  let y = p1.y;
  let p;

  stroke(255, 204, 0);
  strokeWeight(3);

  if(0 <= half && half < 1){
    p = dy2 - dx;
    let nx = dx / dx;
    let ny = dy / dx;
    for(j = 0; j <= dx; j++){
      x = x + nx;
      y = y + ny;
      point(x, y);
    }

  }if(half > 1){
    p = dx2 - dy;
    let nx = dx / dy;
    let ny = dy / dy;
    for(k = 0; k <= dy; k++){
      x = x + nx;
      y = y + ny;
      point(x, y);
    }
  }   
}