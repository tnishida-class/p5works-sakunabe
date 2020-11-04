// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46");

}

function balloon(t){
  let x=20; let y=20;
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  let a= 0; let b=255; let c=255;
  fill(a,b,c);
  rect(x, y, w + p * 10, h + p * 2,20);
  push();
  fill(0,0,255);
  text(t, x+10, y+h);
  pop();

 triangle(40,20,50,10,60,20);


}
