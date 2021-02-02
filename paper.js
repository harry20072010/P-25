class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
        this.body = Matter.Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.image = loadImage("paper.png");
    }
    display(){
        var poss = this.body.position
        images(this.image,x,y,radius);
        push()
        translate()
        ellipseMode(CENTER);
        fill("pink");
        ellipse(poss.x,poss.y,this.radius);
        pop();
    }
}