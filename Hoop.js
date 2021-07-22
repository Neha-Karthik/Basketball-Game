class Hoop {
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("hoop.jpg");
        World.add(world,this.body);
    }
    display(){
        var hooppos = this.body.position;
        fill("brown");
        rectMode(CENTER);
        image(this.image,hooppos.x,hooppos.y,this.width+80,this.height+60);
    }
}