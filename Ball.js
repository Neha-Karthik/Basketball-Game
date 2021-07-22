class Ball {
    constructor(x,y,radius){
        var options = {
            restitution : 0.3,
            friction : 0.5,
            density : 0.6
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius,options);
        this.image = loadImage("basketball.png");
        World.add(world,this.body);
    }
    display(){
        var ballpos = this.body.position;
        push()
        translate(ballpos.x,ballpos.y)
        fill("orange");
        image(this.image,0,0,this.radius,this.radius);
        pop()
    }
}