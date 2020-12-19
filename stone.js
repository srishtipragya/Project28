class Stone{
    constructor(x,y){
        var option={
            restitution:1,
            friction:1.0,
            density:1.5
        }
        this.image=loadImage("stone.png");
        this.body=Bodies.circle(x,y,10,option);
        this.x=x;
        this.y=y;
        World.add(world,this.body);
    }
   
   display(){
       imageMode(CENTER);
       image(this.image,this.body.position.x,this.body.position.y,40,40);
   }
}