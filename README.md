# Sketch2Graph

Sketch2Graph is a web-based application that allows users to draw on a canvas and converts the drawn points into a mathematical equation using Fourier Transform. This project uses `p5.js` for the drawing interface and JavaScript for performing the Fourier Transform and generating the equation.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Demo

You can try out Sketch2Graph by visiting [this link]([#](https://nirajktr.github.io/SketchToGraph/)).

## Features

- Draw on a canvas using your mouse.
- Convert the drawn points into a mathematical equation.
- Display the generated equation on the webpage.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/nirajktr/Sketch2Graph.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Sketch2Graph
    ```

3. Open `index.html` in your preferred web browser.

## Usage

1. Open `index.html` in your web browser.
2. Draw on the canvas using your mouse.
3. Release the mouse button to generate the corresponding Fourier Transform equation.
4. The generated equation will be displayed below the canvas.

## Project Structure

Sketch2Graph/
├── assets/
│ └── styles.css # CSS styles for the project
├── scripts/
│ ├── sketch.js # Handles drawing on the canvas
│ └── fourier.js # Performs Fourier Transform and generates the equation
├── index.html # Main HTML file
└── README.md # Project documentation

## Technologies

- HTML
- CSS
- JavaScript
- [p5.js](https://p5js.org/)

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:

    ```bash
    git checkout -b feature-name
    ```

3. Make your changes and commit them:

    ```bash
    git commit -m "Add feature"
    ```

4. Push to the branch:

    ```bash
    git push origin feature-name
    ```

5. Open a pull request on GitHub.

## License
