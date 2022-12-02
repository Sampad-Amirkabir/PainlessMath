async function draw() {
	let x = 100;
	let y = 100;
	let r = 100;

	for (let i = 0; i < 360; i += 0.1) {
		let x1 = r * Math.cos((i * Math.PI) / 180);
		let y1 = r * Math.sin((i * Math.PI) / 180);
		setPixel(x + x1, y + y1);
	}
}
