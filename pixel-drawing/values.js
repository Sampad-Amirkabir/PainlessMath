const colors = {
	black: "rgb(0, 0, 0)",
	white: "rgb(255, 255, 255)",
	red: "rgb(255, 0, 0)",
	green: "rgb(0, 255, 0)",
	blue: "rgb(0, 0, 255)",
};

/**
 * creates an RGB color
 * 
 * @param {number} r Red value
 * @param {number} g Green value
 * @param {number} b Blue value
 * @returns RGB color value
 */
function rgb(r, g, b) {
	return `rgb(${r}, ${g}, ${b})`;
}

/**
 * creates an RGBA color
 * 
 * @param {number} r Red value
 * @param {number} g Green value
 * @param {number} b Blue value
 * @param {number} a Alpha value
 * @returns 
 */
function rgba(r, g, b, a) {
	return `rgba(${r}, ${g}, ${b}, ${a})`;
}