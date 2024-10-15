function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  background(0);

  noStroke();

  fill(233, 221, 198);
  beginShape();
  vertex(0, 0);
  vertex(windowWidth / 2, 0);
  vertex(windowWidth / 2 - 150, windowHeight / 2);
  vertex(0, windowHeight / 2);
  endShape(CLOSE);

  beginShape();
  vertex(windowWidth * 0.6, windowHeight / 2);
  vertex(windowWidth, windowHeight / 2);
  vertex(windowWidth, windowHeight);
  vertex(windowWidth / 2, windowHeight);
  endShape(CLOSE);

  translate(windowWidth / 2, windowHeight / 2);
  
  let rectSize = min(windowWidth, windowHeight)*0.3; 
  rotate(radians(50));
  rect(-rectSize / 2, -rectSize / 2, rectSize, rectSize);
  rotate(radians(5));
  rect(-rectSize / 2, -rectSize / 2, rectSize, rectSize);
  rotate(radians(5));
  rect(-rectSize / 2, -rectSize / 2, rectSize, rectSize);
  rotate(radians(5));
  rect(-rectSize / 2, -rectSize / 2, rectSize, rectSize);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup(); 
}
