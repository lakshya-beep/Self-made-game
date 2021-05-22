class Line1{
    constructor(x,y,w,h){
    var option={
        isStatic: false,
        friction: 1,
frictionAir: 0.1
        }

        this.body=Bodies.rectangle(x,y,w,h,option);
        World.add(myworld,this.body);
        this.w = w;
        this.h =h;
        this.Visiblity = 255;

        var ran = Math.round(random(1,4));
        if(ran === 1){
            this.image = loadImage("enemy1.png");
        }
        else if (ran === 2){
            this.image = loadImage("enemy2.png")
        }    
        else{this.image = loadImage("enemy3.png");;
        }
        
        
    }

    display(){
        
   console.log(this.body.speed)

    if(this.body.speed<2.8){    
    var pos = this.body.position;
    var angle = this.body.angle;
    



        
    push();
        translate(pos.x,pos.y);
        rotate(angle);
        stroke(178,193,112);
        strokeWeight(2);
        fill(163,104,175);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
    pop();
}

    else{
        World.remove(myworld, this.body);
        push();
        this.Visiblity = this.Visiblity - 10;
        tint(255,this.Visiblity);
        image(this.image, this.body.position.x, this.body.position.y, this.w,this.h);
        zombiesound.play();
        pop();
      }

    };
}




