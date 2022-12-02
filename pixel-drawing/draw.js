async function draw() {
	setPixel(5, 5);
	setPixel(6, 6);
	setPixel(7, 7);
	setPixel(8, 8);

	context.drawImage(await image("profile.jpg"), -200, -200);
	setPixel(50, 60, colors.white);
	setPixel(51, 60, colors.white);
	setPixel(53, 60, colors.white);
	setPixel(54, 60, colors.white);

	let c = getPixel(52, 60);
	setPixel(1, 1, rgb(c[0], c[1], c[2]));
}
