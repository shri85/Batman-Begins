class Drops {
    constructor(x,y) {
        options = {
            restitution:0.5
        }
        this.radius = radius
        this.rain = Bodies.circle(x,y,options);
        World.add(world,this.rain);
    }
    update() {
        if(this.rain.position.y > 400) {
            Matter.body.setPosition(this.rain, {x:random(0,400),y:random(0,400)})
    }
    
    }

    display() {
        var position = this.rain.position
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }
}