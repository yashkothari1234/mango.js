class Boy{
    constructor(x,y,width,height){
    var options={
    isStatic: true,
    restitution : 0.3,
    friction : 0.5,
    density : 1.2
           }
           this.body = Matter.Bodies.rectangle(x,y,width,height,options);
           this.width = width;
           this.height = height;
           World.add(world,this.body);
           this.image = loadImage("boy.png");
   }
   display(){
       var pos =this.body.position;
       rectMode(CENTER);
       fill("brown");
       imageMode(CENTER);
       image(this.image,200,650,200,200);
       
     }
    }