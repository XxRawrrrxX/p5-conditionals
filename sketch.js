var x = 0;
var speed = 5;

function setup(){
    createCanvas(600,400);

}

function draw(){
    background(50);
    if(mouseIsPressed){
        background(0,0,255);
    }
    
    //makes outline white, 10px thicc, no color inside shapes
    stroke(0);
    strokeWeight(10);
    
    if(mouseY<150){
        fill(255,0,0);
    }
    else{
        noFill();
    }
    
   
   //le circle
    ellipse(x,200,100,100);
    
    //this code is going to get the circle to move on its own
    if(x>width || x < 0){
        console.log("CIRCLE IS OFF THE SCREEN!!!!");
        speed = speed * -1;
    }
    
    x = x + speed;
    console.log(x);
}