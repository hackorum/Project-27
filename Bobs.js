class Bob {
    constructor(x, y, r) {

        var options = {
            restitution: 1.5,
            friction: 0.6,
            density: 0.9,
            isStatic: false
        }

        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);

    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill(255);
        ellipse(0, 0, this.r);
        pop();
    }
}
