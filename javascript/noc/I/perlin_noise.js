let n, m, t;
let w = new Walker();

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

t = 0;

function draw() {

    background(55);
    n = noise(t);
    print(n);

    t+=0.001;

    m = map(n, 0, 1, 0, width);
    ellipse(m, 180, 16, 16);

    w.perlin_step();
    w.display_perlin();


}