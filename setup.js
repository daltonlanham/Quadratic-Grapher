// Dalton's setup for Quad solver and Grapher.
// canvas setup, and graph paper

// global variables
var k = 12, ctx, a, b, c, vX, vY, w, h;

function init() {
	canvas= document.getElementById("mycanvas");
	ctx = canvas.getContext("2d");
	w = canvas.width = 600;
	h = canvas.height = 400;
	console.log('canvas is loaded into context',w);
	graphpaper();
}
function graphpaper() {
  // the x and y axis drawn
  ctx.lineWidth=2
  ctx.strokeStyle = "121212"
  ctx.beginPath();
  ctx.moveTo( w/2,0 );
  ctx.lineTo(w/2,h );
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 0,h/2);
  ctx.lineTo(w,h/2);
  ctx.stroke();

// thin line with a 50% opacity using rgba() 
ctx.lineWidth=1;
ctx.strokeStyle="rgba(10,10,10,.5)";

  //using the direct variation constant, k
  //  here are the vertical and horizontal lines

  for (i=0; i<w/(2*k); i++) {
    // middle out to ensure graph paper is centered over axis
    ctx.beginPath();
    ctx.moveTo( w/2+i*k, 0 );
    ctx.lineTo( w/2+i*k, h );
    ctx.stroke();
	} // end for loop Vertical lines 1

	for (i=0; i<w/(2*k); i++) {
    // middle out to ensure graph paper is centered over axis
    ctx.beginPath();
    ctx.moveTo( w/2-i*k, 0 );
    ctx.lineTo( w/2-i*k, h );
    ctx.stroke();
	} // end for loop Vertical lines 2

	for (i=0; i<h/(2*k); i++) {
    // middle out to ensure graph paper is centered over axis
    ctx.beginPath();
    ctx.moveTo( 0, h/2 + i*k);
    ctx.lineTo( w, h/2 + i*k);
    ctx.stroke();
	} // end for loop Horizontal lines 1

	for (i=0; i<h/(2*k); i++) {
    // middle out to ensure graph paper is centered over axis
    ctx.beginPath();
    ctx.moveTo( 0, h/2 - i*k);
    ctx.lineTo( w, h/2 - i*k);
    ctx.stroke();
	} // end for loop Horizontal lines 2
} //graphpaper end 