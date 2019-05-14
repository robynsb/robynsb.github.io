let scale = 700;
let offset = 1800;

function setup() {
	createCanvas(windowWidth, windowHeight);
	pg = createGraphics(windowWidth, windowHeight);
	pg.background(255);
	
	pg.strokeWeight(2);

	let black = color(0, 0, 0);
	let green = color(0, 255, 0);

	pg.stroke(green);
	pg.line(0, PI * scale - offset, 1920, PI * scale - offset);

}

let CalcPi = 1;
let x = 0;
let LastCalcPi = 1;
let LastX = 0;



function draw() {
	background(255);

	
	let red = color(255, 0, 0);
	
	
	pg.strokeWeight(2);

	pg.stroke(red);
	pg.line(LastX * 10, LastCalcPi * 4 * scale - offset, x * 10, CalcPi * 4 * scale - offset);

	image(pg, 0, 0);

	textSize(32);
	text("π ≈ " + CalcPi * 4, 10, 30);

	LastX = x;
	LastCalcPi = CalcPi;


	x += 1;
	let denominator = x * 2 + 1;
	let numerator = x % 2 * -2 + 1;
	CalcPi += numerator/denominator;
}