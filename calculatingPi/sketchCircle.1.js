let r = 300;
let l = 1000;
let mid = l/2;

let pg;

function setup() {
	pg = createGraphics(l, l);
	

	frameRate(60);
	createCanvas(l, l);
	pg.background(0);
	pg.stroke(255);
	pg.strokeWeight(5);
	pg.point(mid, mid);
}

let inside = 0;
let outside = 0;

function draw() {
	let green = color(0, 255, 0);
	let red = color(255, 0, 0);
	strokeWeight(3);
	x = random(l);
	y = random(l);
	d = sqrt(pow(mid - x, 2) + pow(mid - y, 2));
	if(d < r) {
		pg.stroke(green);
		inside += 1;
	} else {
		pg.stroke(red);
		outside += 1;
	}

	pg.point(x, y);
	image(pg, 0, 0);

	//background(0);
	fill(255);
	textSize(40);
	let k = inside / outside;
	let EPI = k*pow(l,2)/((k+1)*pow(r,2));
	text(" π ≈ " + EPI, 10, 30);

	
}