
      class Mango{
        constructor(x,y,width,height,){
            var options = {
                isStatic : true,
                restitution : 1,
                friction : 0,
                density : 0
            
                
            }
            this.image = loadImage("mango.png");
            this.body = Matter.Bodies.circle(x,y,15,options);
            this.width = width;
            this.height = height;
            World.add(world, this.body);
           
        }
        display(){
            image(this.image,this.body.position.x,this.body.position.y,50,50);
            image(this.image,this.body.position.x,this.body.position.y,50,50);
            image(this.image,this.body.position.x,this.body.position.y,50,50);
            image(this.image,this.body.position.x,this.body.position.y,50,50);
            
            
    
    
    ellipse(this.body.position.x,this.body.position.y,this.width,this.height);
        }
    }