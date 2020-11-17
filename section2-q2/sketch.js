// チェッカー
function setup() {
  createCanvas(160, 160);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(i%2==0 && j%2==1){
      fill(125,125,125);
      console.log(i,j);
      rect(i*20,j*20,20,20,);}
    else if(i%2==1 && j%2==0){
      fill(125,125,125);
      console.log(i,j);
      rect(i*20,j*20,20,20,);  }  // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
}  }
  fill(255,0,0);
  for(let x=30; x<160; x=x+40){
  for(let y=10;y<60;y=y+40){
  ellipse(x,y,16);
}}
for(let x=10;x<160;x=x+40){
  for(let y=30;y<60;y=y+40){
    ellipse(x,y,16);
  }}
  fill(0,0,0);
  for(let x=10;x<160;x=x+40){
    for(let y=110;y<160;y=y+40){
      ellipse(x,y,16);
    }  }
    for(let x=30;x<160;x=x+40){
      for(let y=130;y<160;y=y+40){
        ellipse(x,y,16);
      }}
}
