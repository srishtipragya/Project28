class Mango{
    constructor(x,y){
        var option={
            isStatic:true,
            restitution:0,
            density:1
        }
        this.image=loadImage("mango.png");
        this.body=Bodies.circle(x,y,25,option);
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        var pos=this.body.position;
        image(this.image,pos.x,pos.y,50,50);
    }
}