// 最終課題を制作しよう

let x,y,c,cv,d,e,f;
function setup(){
  createCanvas(200,200);
  background(160,192,255);
  reset();
  c=80; d=80; e=90;f=110;
}

function reset(){
  c=79;d=79;e=89;f=109;
}

function keyPressed(){
  if(key==" "){reset();}
}

function draw(){
hand();
  strokeWeight(4);
  fill(255,228,196);
  ellipse(100,100,55,80);
  ellipse(100,50,70,55);
  fill(0);
  strokeWeight(2);
  ellipse(85,50,15);
  ellipse(115,50,15);
  strokeWeight(10);
  line(60,90,80,90);
  line(120,90,140,90);
  line(90,135,85,155);
  line(110,135,115,155);
  textSize(20); fill(0,0,205);
  text('baby',10,30);

  heart(x,y,10);



function heart(a,b,d){
push();
noStroke();
fill(255,0,0);
ellipse(a,b,d);
ellipse(a+d,b,d);
triangle(a-d/2,b,a+d/2,b+d,a+d/2*3,b);
pop();
}}

function mouseClicked(){
  x=mouseX;
  y=mouseY;
}


function hand(){
  background(160,192,255);
  line(50,c,60,90);
  line(150,d,140,90);
  line(85,155,e,170);
  line(115,155,f,170);
  if(x<=55&&x>=45&&y<=85&&y>=70){c+=1;}
   if(x<=155&&x>=145&&y>=70&&y<=85){d+=1;}
  if(x<=80&&x>=70&&y>=90&&y<=130){c+=1;e-=1;}
  if(x<=120&&x>=110&&y<=130&&y>=90){d+=1;f+=1;}
  c=constrain(c,80,100);
  d=constrain(d,80,100);
  e=constrain(e,70,90);
  f=constrain(f,110,130);
}
