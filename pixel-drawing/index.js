/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");

/** @type {CanvasRenderingContext2D} */
const context = canvas.getContext("2d");

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
	context.clearRect(x * properties.scale, y * properties.scale, width * properties.scale, height * properties.scale);
}

/**
 * sets a pixel color
 *
 * @param {number} x The x coordinate of the canvas
 * @param {number} y The y coordinate of the canvas
 * @param {string} color The color to be set
 */
function pixel(x, y, color = colors.black) {
	context.fillStyle = color;
	context.fillRect(x * properties.scale, y * properties.scale, properties.scale, properties.scale);
}
