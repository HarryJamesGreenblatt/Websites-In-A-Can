class Walker {
    constructor(){
        this.x = window.innerWidth / 2;
        this.y = window.innerHeight / 2;
        this.tx = 0;
        this.ty = 10000;
    }

    display(){
        point(this.x, this.y);
    }

    display_perlin(){
        ellipse(this.x, this.y, 16, 16);
    }

    step(){
        let choice = floor(random(4));
        switch (choice) {
            case 0:
                this.x += random(1);
                break;
            case 1:
                this.x -= random(1);
                break;
            case 2:
                this.y += random(1);
                break;
            case 3:
                this.y -= random(1);
                break;
        }
    }

    better_step(){
        this.x += random(-1,1);
        this.y += random(-1,1);
    }

    perlin_step(){

        this.x = map(
            noise(this.tx), 0, 1, 0, width
        );

        this.y = map(
            noise(this.ty), 0, 1, 0, height
        );

        this.tx += 0.01;
        this.ty += 0.01;
    
    }
}