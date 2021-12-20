var diam1=0
var textx=0

function setup() {
  createCanvas(500, 500);
 // 
}
  

function draw() {
  background("#b2c8ff");
  fill("white"); //for cloud left
  noStroke();
  ellipse(190,150,200,60);
  ellipse(170,135,100,50);
  ellipse(220,125,100,50);
  
  ellipse(350,240,180,60); // cloud right
  ellipse(330,225,100,50);
  ellipse(380,230,100,50);
  
  fill("#dcbd5e");
  stroke("#ffff00");
  strokeWeight(5);
  ellipse(350,100,diam1,diam1);
  
  textSize(20);
textFont("Arial");
textStyle(ITALIC);
textAlign(LEFT);
text("here comes the sun",textx,350);
  
  if (textx>500){     
     textx = 0;   
  }else{     
     textx=textx + 5;   
  }
} 

function mousePressed() {
diam1=diam1+5;
}