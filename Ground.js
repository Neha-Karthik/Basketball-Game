class Ground {
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        var groundpos = this.body.position;
        fill("brown");
        rectMode(CENTER);
        rect(groundpos.x,groundpos.y,this.width,this.height);
    }
}