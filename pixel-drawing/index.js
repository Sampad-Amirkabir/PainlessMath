/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");

/** @type {CanvasRenderingContext2D} */
const context = canvas.getContext("2d");

/** @type {number} */
const width = canvas.width / properties.scale;

/** @type {number} */
const height = canvas.height / properties.scale;

/**
 * clears the canvas
 *
 * @param {number} x The x coordinate of the canvas
 * @param {number} y The y coordinate of the canvas
 * @param {number} width The width of the area to be cleared
 * @param {number} height The height of the area to be cleared
 */
function clear(x = 0, y = 0, width = canvas.width, height = canvas.height) {
	context.clearRect(x * properties.scale, y * properties.scale, width * properties.scale, height * properties.scale);
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
	context.fillRect(x * properties.scale, y * properties.scale, properties.scale, properties.scale);
}

/**
 * returns the color of the specified pixel
 *
 * @param {number} x The x coordinate of the canvas
 * @param {number} y The y coordinate of the canvas
 * @return {[number, number, number, number]} The color value of the canvas at the specified pixel position
 */
function getPixel(x, y) {
	return context.getImageData(x * properties.scale, y * properties.scale, 1, 1).data;
}
