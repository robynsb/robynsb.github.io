let width = 1000;
let height = 1000;
function setup() {
	createCanvas(width, height);
	let c = color(255, 204, 0); // Define color 'c'
	fill(c); // Use color variable 'c' as fill color
	noStroke();
}

let x = 100;
let y = 100;
let press_x;
let press_y;
let v_x = 0;
let v_y = 0;
let prev_x = x;
let prev_y = y;

function draw() {
	background(0);
	if(x < 0 || x > width) {
		v_x = -v_x;
	}
	if(y < 0 || y > height) {
		v_y = -v_y;
	}
	x += v_x;
	y += v_y;
	if(mouseIsPressed) {
		prev_x = press_x;
		prev_y = press_y;
		press_x = x + mouseX-mouseSaveX;
		press_y = y + mouseY-mouseSaveY;
		ellipse(press_x, press_y, 80, 80);
	} else {
		ellipse(x, y, 80, 80);

	}
	
}

let mouseSaveX;
let mouseSaveY;

function mousePressed() {
	mouseSaveX = mouseX;
	mouseSaveY = mouseY;
	v_x = 0;
	v_y = 0;
}

function mouseReleased() {
	v_x = press_x-prev_x;
	v_y = press_y-prev_y;
	x = press_x;
	y = press_y;
}
