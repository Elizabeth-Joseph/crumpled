class Paper{
    constructor(x,y,width,height){
     
        
    var option={
        isStatic:false,
       restituition:0.3, friction: 0.5,density: 1.2
    }
        this.object = Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        World.add(world,this.object);

    }
display(){
var pos =this.object.position;
var angle=this.object.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
fill("lightblue");
ellipseMode(CENTER);
    ellipse(pos.x,pos.y,this.width,this.height);
    pop()
}

};