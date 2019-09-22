var bubbles = [];

function setup() {
  createCanvas(750, 750);

  for (var i = 0; i < 1000; i++) {
    var bubble = {
      x: random(width),
      y: random(height),
      radius: random(1, 3)
    };
    bubbles.push(bubble);
  }
}

function draw() {
  background(0);

  for (var i = 0; i < bubbles.length; i++) {
    var bubble = bubbles[i];

    if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
      if (mouseIsPressed) {
        bubbles.splice(i, 1); // remove this bubble!
      }
      fill(221, 160, 221, 200);
    } else {
      fill(255);
    }

    ellipse(bubble.x, bubble.y, bubble.radius * 1);
    bubble.x += random(-1, 1);
    bubble.y += random(-1, 1);
  }
}
