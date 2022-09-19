function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    fill(0,10);
    noStroke();
}

function draw(){
    
    let x = randomGaussian(60, 320);
    ellipse(x, 180, 16, 16)
    
    if(keyIsPressed){
        switch (keyCode) {
            case 49: // 1 key
                background(255);
                break;
        
            default:
                console.log(keyCode);
        }
    }
}