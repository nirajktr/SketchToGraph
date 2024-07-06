// fourier.js

// Fourier Transform function
function fourierTransform(points) {
    // Convert points to complex numbers
    let complexPoints = points.map(point => new Complex(point.x, point.y));

    // Perform Discrete Fourier Transform (DFT)
    let coefficients = dft(complexPoints);

    // Sort coefficients by magnitude (optional but can help with accuracy)
    coefficients.sort((a, b) => b.amplitude - a.amplitude);

    return coefficients;
}

// Complex number class
class Complex {
    constructor(a, b) {
        this.re = a;
        this.im = b;
    }

    // Get magnitude of complex number
    get amplitude() {
        return sqrt(this.re * this.re + this.im * this.im);
    }
}

// Discrete Fourier Transform (DFT) function
function dft(x) {
    const X = [];
    const N = x.length;
    for (let k = 0; k < N; k++) {
        let re = 0;
        let im = 0;
        for (let n = 0; n < N; n++) {
            let phi = (TWO_PI * k * n) / N;
            re += x[n].re * cos(phi) + x[n].im * sin(phi);
            im += -x[n].re * sin(phi) + x[n].im * cos(phi);
        }
        re /= N;
        im /= N;
        let freq = k;
        let amplitude = sqrt(re * re + im * im);
        let phase = atan2(im, re);
        X[k] = { re, im, freq, amplitude, phase };
    }
    return X;
}

// Generate equation from Fourier coefficients
function generateEquation(coefficients) {
    let equation = '';

    for (let i = 0; i < coefficients.length; i++) {
        let freq = coefficients[i].freq;
        let amplitude = coefficients[i].amplitude;
        let phase = coefficients[i].phase;

        if (i > 0) {
            equation += ' + ';
        }

        equation += `${amplitude.toFixed(2)} * cos(${freq} * t + ${phase.toFixed(2)})`;
    }

    return equation;
}
