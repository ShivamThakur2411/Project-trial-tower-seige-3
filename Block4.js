class Block4{
    constructor(x, y, width, height,angle) {
        var options = {
            restitution:0.1,
            friction:1.5,
            density:0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;

        World.add(world, this.body);
      }
      display(){
        if(this.body.speed < 5){
         var pos =this.body.position;
      rectMode(CENTER);
      fill("orange");
      rect(pos.x, pos.y, this.width, this.height);
    }else {
         World.remove(world, this.body);
      push();

      this.visibility = this.visibility - 5;
      
      pop();
      }

    }
    score(){
      if(this.Visibility < 0 && this.Visibility >= -105){
        score + 1;
      }
    }
}