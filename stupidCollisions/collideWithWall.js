//Aliases
let Application = PIXI.Application,
	loader = PIXI.loader,
	resources = PIXI.loader.resources,
	Sprite = PIXI.Sprite;

//Create a Pixi Application
let app = new Application({
	width: 1000,
	height: 600,
	antialias: true,
	transparent: false,
	resolution: 1,
	backgroundColor: 0x1099bb
});

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

function hitTestRectangle(r1, r2) {

	//Define the variables we'll need to calculate
	let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

	//hit will determine whether there's a collision
	hit = false;

	//Find the center points of each sprite
	r1.centerX = r1.x + r1.width / 2;
	r1.centerY = r1.y + r1.height / 2;
	r2.centerX = r2.x + r2.width / 2;
	r2.centerY = r2.y + r2.height / 2;

	//Find the half-widths and half-heights of each sprite
	r1.halfWidth = r1.width / 2;
	r1.halfHeight = r1.height / 2;
	r2.halfWidth = r2.width / 2;
	r2.halfHeight = r2.height / 2;

	//Calculate the distance vector between the sprites
	vx = r1.centerX - r2.centerX;
	vy = r1.centerY - r2.centerY;

	//Figure out the combined half-widths and half-heights
	combinedHalfWidths = r1.halfWidth + r2.halfWidth;
	combinedHalfHeights = r1.halfHeight + r2.halfHeight;

	//Check for a collision on the x axis
	if (Math.abs(vx) < combinedHalfWidths) {

		//A collision might be occurring. Check for a collision on the y axis
		if (Math.abs(vy) < combinedHalfHeights) {

			//There's definitely a collision happening
			hit = true;
		} else {

			//There's no collision on the y axis
			hit = false;
		}
	} else {

		//There's no collision on the x axis
		hit = false;
	}

	//`hit` will be either `true` or `false`
	return hit;
};


function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

function createParticle(isRed, yPos) {
	particle = new PIXI.Graphics();

	if (isRed) {
		particle.beginFill(0xFF2E2E);
		particle.m = 10;
		particle.x = 300;
		particle.vx = 0;
		particle.vy = 0;

		
	} else {
		particle.beginFill(0x0734FC);
		particle.m = 100;
		particle.x = 800;
		particle.vx = -5;
		particle.vy = 1;
	}
	
	
	particle.drawRect(0, 0, 50, 50);

	particle.y = yPos
	particle.px = particle.x;
	particle.py = particle.y;
	particle.endFill();
	



	//Add the P to the stage
	app.stage.addChild(particle);
	return particle
}

let particles = [];

//load an image and run the `setup` function when it's done
loader
	.load(setup);


//This `setup` function will run when the image has loader
function setup() {

	for (var i = 0; i <= 11; i++) {
		particles.push(createParticle(true, i*50))
	}
	for (var i = 0; i < 1; i++) {
		particles.push(createParticle(false, 300))
	}

	app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta) {
	for (var i = 0; i < particles.length; i++) {
		let particle = particles[i];
		if (particle.y < 0 || particle.y + particle.height > app.screen.height) {
			particle.vy = -particle.vy;
		}
		if (particle.x < 0 || particle.x + particle.width > app.screen.width) {
			particle.vx = -particle.vx;
		}

	}
	for (var i = 0; i < particles.length; i++) {
		let P1 = particles[i]
		for (var k = 0; k < particles.length; k++) {
			let P2 = particles[k];
			if (P1 != P2) {
				if (hitTestRectangle(P1, P2)) {
					let mTotal = P1.m + P2.m;
					if (P1.px + P1.width <= P2.px || P1.px >= P2.px + P2.width) {
						//P1.vx = -P1.vx;
						P1.vx = (P1.ux * (P1.m - P2.m) / mTotal) + 2 * P2.ux * P2.m / mTotal;
						P1.vx *= 1
					}
					if (P1.py + P1.height <= P2.py || P1.py >= P2.py + P2.height) {
						//P1.vy = -P1.vy;
						P1.vy = (P1.uy * (P1.m - P2.m) / mTotal) + 2 * P2.uy * P2.m / mTotal;
						P1.vy *= 1
					}
				}
			}
		}
	}

	for (var i = 0; i < particles.length; i++) {
		let particle = particles[i];

		particle.ux = particle.vx;
		particle.uy = particle.vy;

		particle.px = particle.x;
		particle.py = particle.y;

		particle.x += particle.vx;
		particle.y += particle.vy;
	}

}