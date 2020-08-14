
      class Stone{
        constructor(x,y,width,height,){
            var options = {
                isStatic : false,
                restitution : 0,
                friction : 1,
                density : 20.2
            
                
            }
            this.image = loadImage("stone.png");
            this.body = Matter.Bodies.circle(x,y,15,options);
            this.width = width;
            this.height = height;
            World.add(world, this.body);
           
        }
        display(){
            image(this.image,this.body.position.x,this.body.position.y,50,50);

            
            
    
    
    ellipse(this.body.position.x,this.body.position.y,this.width,this.height);
        }
    }