class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0.6,
          density:1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.body.visible=false;
      
      World.add(world, this.body);
    }
    display(){

      if((this.body.speed)<3){

      var pos =this.body.position;
      rectMode(CENTER); 
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
}else
{
World.remove(world,this.body)
  }}
  }