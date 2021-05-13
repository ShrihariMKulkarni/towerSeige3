class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    attach(body)
    {
        this.chain.bodyA=body;
    
    }
        fly(){
            this.chain.bodyA = null;
        }

    display(){
       // rect(200,20 , 303 , 30);
        //image(this.sling2,170,20);
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
        
                strokeWeight(3);
                stroke("cyan"); 
                line(pointA.x, pointA.y, pointB.x, pointB.y);
               //line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y);
            
        }
    }
    
}
