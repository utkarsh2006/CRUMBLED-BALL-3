class Launcher {
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
             bodyB:bodyB,
             stiffness:0.04,
             length:10
      }
        this.launcher=Constraint.create(options)
        World.add(world,this.slingshot)
    }
    display(){
        var pointA=this.launcher.bodyA.position
        var pointB=this.launcher.bodyB.position
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
  
    }
    fly(){
        this.launcher.bodyA = null;
    }
  }