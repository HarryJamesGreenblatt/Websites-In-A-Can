var x,y;

function setup(){
    var cnv = createCanvas(window.innerWidth, window.innerHeight);
    background(67);
    x = (width/2);
    y = (height/2);

}

function draw() {
    fill(255);
    ellipse(x, y, 20);

    switch (keyCode) {
        case UP_ARROW:
            y -= 0.1;
            break;
        case DOWN_ARROW:
            y += 0.1;
            break;
        case LEFT_ARROW:
            x -= 0.1;
            break;
        case RIGHT_ARROW:
            x += 0.1;
            break;
        default:
            break;
    }

}