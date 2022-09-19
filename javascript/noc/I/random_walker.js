var walker;

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    background(50);
    stroke(200);
    strokeWeight(5);
    walker = new Walker();
}

function draw() {
    walker.better_step();
    walker.display();
}