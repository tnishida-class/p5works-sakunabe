// 小手調べ
function setup(){
  stroke(255,0,0);
  for(let x=100; x<=100&&x>=60;x=x-10){
    ellipse(50,50,x);
  }
  stroke(0,0,255);
  for(let x=50; x<=50&&x>0;x=x-10){
    ellipse(50,50,x);
  }
}
