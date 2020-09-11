class Rope {

    constructor(body1, body2, offsetX, offsetY) {

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {

            length: 200,
            stiffness: 0.04,
            bodyA: body1,
            bodyB: body2,
            pointB: { x: this.offsetX, y: this.offsetY }

        }

        this.chain = Constraint.create(options);
        World.add(world, this.chain);

    }

    display() {

        strokeWeight(4);
        stroke(0);
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x + this.offsetX, this.chain.bodyB.position.y + this.offsetY);

    }

}