// general grapher and button functions
// David's Soft Dev Clas 2019

function wtf() {
  f=$("#function").val();
  console.log(f);
  Ggraph();
}

function Ggraph () {
  for (var i = 0; i < w; i++) {
    x = (w/2-i)/k;
    nx =  (w/2-(i+1))/k;
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "Red";
    ctx.moveTo(scaledX(x),scaledY(plugX2(x)));
    ctx.lineTo(scaledX(nx),scaledY(plugX2(nx)));
    ctx.stroke();
  }

  $("#yInt").text("Y intercept is at (0," + plugX2(0)+")");
  ctx.beginPath();
  ctx.arc(scaledX(0),scaledY(plugX2(0)),5,0,6.28);
  ctx.fill();
} // end of Ggraph()

function zoomIn() {
 if (k<150){
  k=k+3;
  ctx.clearRect(0,0,w,h);
  graphpaper();
  Ggraph();
  }
}

function resetCanvas() {
ctx.clearRect(0,0,w,h);
 k=10;
 graphpaper();
}
function zoomOut() {
 if (k>8){
  k=k-3;
  ctx.clearRect(0,0,w,h);
  graphpaper();  
  Ggraph();
}
}

function scaledX(x) {
 newx = w/2+x*k;
 return newx;
}
function scaledY(y) {
 newy = h/2-y*k;
 return newy;
}

function plugX2(x) {
 y = eval(f);
 return y;
}