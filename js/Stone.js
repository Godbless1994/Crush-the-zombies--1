class Stone{
    constructor(x, y){
   var options = {
   isStatic: false
   };
   this.r = 30;
    this.speed = 0.05;
    this.body = Bodies.circle(x, y, this.r, options);
    World.add(world, this.body);
    }

    show(){
        let pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        strokeWeight(1);

        ellipseMode(RADIUS);
        noStroke();
        fill("white");
        ellipse(0,0, this.w, this.h);
        pop();
    }
}