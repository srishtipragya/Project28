class Ground{
    constructor(x,y,width){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,20,option);
        this.x=x;
        this.y=y;
        this.width=width;
        World.add(world,this.body);
    }
    display(){
        fill("brown");
        var pos=this.body.position;
        rect(pos.x,pos.y,this.width,20);
    }
}