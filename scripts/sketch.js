// sketch.js ..

// All the paths
let paths = [];
let painting = false;

// How long until the next circle
let next = 0;

let current;
let previous;

// Array to store drawn points
let points = [];

// Fourier coefficients
let coefficients = [];

function setup() {
    createCanvas(800, 600);
    current = createVector(0, 0);
    previous = createVector(0, 0);
}

function draw() {
    background(200);
    
    // If it's time for a new point
    if (millis() > next && painting) {      
        let current = createVector(mouseX, mouseY);

        // New point's force is based on mouse movement
        let force = p5.Vector.sub(current, previous);
        force.mult(0.05);

        // Add new point to the array
        points.push({ x: current.x, y: current.y });

        // Schedule next point
        next = millis() + random(100);

        // Store current mouse values
        previous.x = current.x;
        previous.y = current.y;
    }

    // Draw all points
    for (let i = 0; i < points.length - 1; i++) {
        stroke(0);
        strokeWeight(3);
        line(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
    }
}

function mousePressed() {
    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
        next = 0;
        painting = true;
        previous.x = mouseX;
        previous.y = mouseY;
        paths.push(new Path());
    }
}

function mouseReleased() {
    painting = false;

    // Perform Fourier Transform on points
    coefficients = fourierTransform(points);

    // Generate equation from coefficients
    let equation = generateEquation(coefficients);
    console.log("Generated Equation =", equation);

    // Display the equation
    document.getElementById('equation').innerText = equation;
}
