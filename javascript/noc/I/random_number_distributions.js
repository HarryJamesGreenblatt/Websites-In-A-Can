let randomCounts = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight-100);
    for(let i = 0; i < 20; i++){
        randomCounts[i] = 0;
    }
}

function draw() {
    background(55);

    let index = floor(
        random(
            randomCounts.length
        )
    );

    randomCounts[index]++;
    
    stroke(0);
    fill(175);
    
    let w = width / randomCounts.length;

    for (let x = 0; x < randomCounts.length; x++) {
        rect(
            x*w, 
            height - randomCounts[x], 
            w - 1, 
            randomCounts[x]
        );
    }
}