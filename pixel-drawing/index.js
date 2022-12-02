/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");

/** @type {CanvasRenderingContext2D} */
const context = canvas.getContext("2d");

context.scale(properties.scale, properties.scale);

/** @type {number} */
const width = canvas.width;

/** @type {number} */
const height = canvas.height;

/**
 * clears the canvas
 *
 * @param {number} x The x coordinate of the canvas
 * @param {number} y The y coordinate of the canvas
 * @param {number} width The width of the area to be cleared
 * @param {number} height The height of the area to be cleared
 */
function clear(x = 0, y = 0, width = canvas.width, height = canvas.height) {
	context.clearRect(x, y, width, height);
}

/**
 * sets a pixel color
 *
 * @param {number} x The x coordinate of the canvas
 * @param {number} y The y coordinate of the canvas
 * @param {string} color The color to be set
 */
function setPixel(x, y, color = colors.black) {
	context.fillStyle = color;
	context.fillRect(x, y, 1, 1);
}

/**
 * returns the color of the specified pixel
 *
 * @param {number} x The x coordinate of the canvas
 * @param {number} y The y coordinate of the canvas
 * @return {[number, number, number, number]} The color value of the canvas at the specified pixel position
 */
function getPixel(x, y) {
	return context.getImageData(x, y, 1, 1).data;
}

/**
 * creates a new image from the specified url
 *
 * @param {string} url The url of the image
 * @return {Promise<HTMLImageElement>} The image element
 */
async function image(url) {
	return new Promise((resolve) => {
		const img = new Image();
		img.crossOrigin = "anonymous";
		img.src = url;
		img.onload = () => resolve(img);
	});
}

draw();
