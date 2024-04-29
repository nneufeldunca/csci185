const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

colors = ['blue', 'limegreen', 'purple']

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    drawShape(500, 100, 300, "purple", "limegreen");
    drawShape(200, 200, 50, "blue", "limegreen");

    drawGrid(canvasWidth, canvasHeight);
}

function drawShape(x, y, size, bigColor, smallColor) {
    fill(bigColor);
    circle(x, y, size);
    fill(smallColor);
    circle(x, y, size/2);
}
