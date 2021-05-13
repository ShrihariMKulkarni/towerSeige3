class Ball{
constructor(x,y,radius){

    var options={

        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }

    this.body = Bodies.circle(x,y,radius,options);
    //this.img = loadImage("images/polygon.png")
    this.x = x
    this.y = y
    this.radius = radius
    World.add(world,this.body)

}
display(){
    var pos =this.body.position;
    imageMode(CENTER);
    fill("yellow");
    //image(this.img , pos.x , pos.y , 40,40);
    ellipse(pos.x, pos.y, this.radius ,this.radius);
    
  }
}