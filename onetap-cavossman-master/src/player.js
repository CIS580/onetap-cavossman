var x = 382;
var y = 420;
var image = new Image();

image.onload = function(){
	y = y - image.height;
	x = x - image.width/8;
}
image.src = 'assets/link/not%20link/notlink%20up';

export function init(){}

export function update(elapsedTime){}

export function render(elapsedTime, ctx){
	ctx.drawImage(image, x, y, 64, 64, 0, 0, image.width/4, image.height);
}