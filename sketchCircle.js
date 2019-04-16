let EPI;
var s = function (sketch) {

	let r = 300;
	let l = 1000;

	let mid = l/2;

	let pg;

	sketch.setup = function () {
		pg = sketch.createGraphics(l, l);
		

		sketch.frameRate(60);
		sketch.createCanvas(l, l);
		pg.background(0);
		pg.stroke(255);
		pg.strokeWeight(5);
		pg.point(mid, mid);
	};

	let inside = 0;
	let outside = 0;

	sketch.draw = function () {
		let green = sketch.color(0, 255, 0);
		let red = sketch.color(255, 0, 0);
		sketch.strokeWeight(3);
		x = sketch.random(l);
		y = sketch.random(l);
		d = sketch.sqrt(sketch.pow(mid - x, 2) + sketch.pow(mid - y, 2));
		if(d <= r) {
			pg.stroke(green);
			inside += 1;
		} else {
			pg.stroke(red);
			outside += 1;
		}

		pg.point(x, y);
		sketch.image(pg, 0, 0);

		//background(0);
		sketch.fill(255);
		sketch.textSize(40);
		let k = inside / outside;
		EPI = k * sketch.pow(l, 2) / ((k + 1) * sketch.pow(r, 2));
		//sketch.text(" π ≈ " + EPI, 10, 30);

		
	};
};







var g = function (sketch) {


	let scale = 700;
	let offset = -2600;

	sketch.setup = function () {
		sketch.createCanvas(1000, 1000);
		pg = sketch.createGraphics(1000, 1000);
		pg.background(255);

		pg.strokeWeight(2);

		let green = sketch.color(0, 255, 0);

		pg.stroke(green);
		pg.line(0, -sketch.PI * scale - offset, 1920, -sketch.PI * scale - offset);

	};

	let CalcPi = 1;
	let x = 0;
	let LastCalcPi = 1;
	let LastX = 0;
	let Xoffset = 0;


	sketch.draw = function () {
		sketch.background(255);


		let red = sketch.color(255, 0, 0);


		pg.strokeWeight(2);


		pg.stroke(red);

		if (x - Xoffset > 1000) {
			pg.background(255);
			let green = sketch.color(0, 255, 0);

			pg.stroke(green);
			pg.line(0, -sketch.PI * scale - offset, 1920, -sketch.PI * scale - offset);
			Xoffset += 1000;
		}

		pg.line(LastX - Xoffset, -LastCalcPi * scale - offset, x - Xoffset, -CalcPi * scale - offset);

		sketch.image(pg, 0, 0);

		sketch.textSize(32);
		sketch.text("π ≈ " + CalcPi + "\n t = " + Math.round(sketch.millis()/1000) + " seconds", 10, 30);

		LastX = x;
		LastCalcPi = CalcPi;


		x += 1;
		CalcPi = EPI;
	};
};




var myp5 = new p5(s);
var myp6 = new p5(g);