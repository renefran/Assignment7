let graph;
// let spacing = 75;


function preload() {
  graph = loadModel('graphene.obj', true)
}


function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  background(0);


noStroke();



for (x = 0; x < 8; x++) {
  for (y = 0; y < 8; y++) {
push();
fill(255)
translate(-350 + x*100, -350 + y*100)
rotateZ(frameCount*0.01)
rotateX(frameCount*0.01)
rotateY(frameCount*0.01)
scale(0.5);
model(graph);
pop();
}



}
}
