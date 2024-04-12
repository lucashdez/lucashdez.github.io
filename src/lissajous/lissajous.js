/**
 * Universidad de La Laguna
 * Escuela superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @author Lucas Hernández Abreu
 * @since 07-MAY-2022
 * @desc This file contains a class represents the lissajous curves in a
 * canvas.
 * 
 * @see {@link https://academo.org/demos/lissajous-curves/}
 */


/**
 * @class Lissajous
 * @classdesc This class represents the Lissajous curves in a gridded canvas.
 */
export class Lissajous {
  /** @private {Context}*/
  #context = null;

  /** @private {Canvas} */
  #canvas = null;

  /** @private {Number} */
  #alpha = 1;

  /** @private {Number} */
  #beta = 1;

  /** @private {Number} */
  #radians = 0;

  /**
   * @constructor Takes the canvas and the context, assigns the proper width
   * and height and draws the grid to the canvas.
   */
  constructor() {
    this.#canvas = document.getElementById('myCanvas');
    this.#canvas.style.width = '100%';
    this.#canvas.style.height = '100%';
    this.#canvas.width = this.#canvas.offsetWidth;
    this.#canvas.height = this.#canvas.offsetHeight;
    this.#context = this.#canvas.getContext('2d');
    this.#drawGrid();
    this.#watchControlGlider();
    this.#watchControlTextbox();
  }

  /**
   * @method drawGrid
   * @desc This function draws the grid of the Lissajous curve
   */
  #drawGrid() {
    for (let separator = 0; separator < this.#canvas.width; separator += 10) {
      this.#context.beginPath();
      this.#context.strokeStyle = 'darkgray';
      if (separator % 60 === 0) {
        this.#context.lineWidth = 1
      } else {
        this.#context.lineWidth = 0.2
      }
      
      /** Horizontal lines */
      this.#context.moveTo(0, separator);
      this.#context.lineTo(this.#canvas.width, separator)
      this.#context.stroke();

      /** Vertical lines */
      this.#context.moveTo(separator, 0);
      this.#context.lineTo(separator, this.#canvas.height);
      this.#context.stroke();
    }
  }

  /**
   * @method watchControls
   * @desc This function updates the values in the input tables
   */
  #watchControlGlider() {
    let alphaInput = document.getElementById('alphaInput');
    let alphaValue = document.getElementById('alphaValue');

    let betaInput = document.getElementById('betaInput');
    let betaValue = document.getElementById('betaValue');

    let radiansInput = document.getElementById('radiansInput');
    let radiansValue = document.getElementById('radiansValue');

    /** Event listener to the alpha value */
    alphaInput.addEventListener('input', () => {
      this.#alpha = alphaInput.value;
      alphaValue.value = this.#alpha;
    }, false);

    /** Event listeners to the beta value */
    betaInput.addEventListener('input', () => {
      this.#beta = betaInput.value;
      betaValue.value = this.#beta;
    }, false);

    /** Event listeners to the radians value */
    radiansInput.addEventListener('input', () => {
      this.#radians = radiansInput.value;
      radiansValue.value = this.#radians;
    }, false);
  }

  /**
   * @method watchControlTextbox
   * @desc This function updates the values in the gliders
   */
  #watchControlTextbox() {
    let alphaInput = document.getElementById('alphaInput');
    let alphaValue = document.getElementById('alphaValue');

    let betaInput = document.getElementById('betaInput');
    let betaValue = document.getElementById('betaValue');

    let radiansInput = document.getElementById('radiansInput');
    let radiansValue = document.getElementById('radiansValue');

    /** Changes to alpha value */
    alphaValue.addEventListener('input', () => {
      this.#alpha = alphaValue.value;
      alphaInput.value = this.#alpha;
    }, false);

    /** Changes to beta value */
    betaValue.addEventListener('input', () => {
      this.#beta = betaValue.value;
      betaInput.value = this.#beta;
    }, false);

    /**Changes to radians value*/
    radiansValue.addEventListener('input', () => {
      this.#radians = radiansValue.value;
      radiansInput.value = this.#radians;
    }, false)
  }

  /**
   * @method update
   * @desc Updates the draw
   */
   draw = ()  => {
    this.#context.clearRect(0,0, this.#canvas.width, this.#canvas.height);
    this.#drawGrid();
    this.#context.strokeStyle = 'Black';
    this.#context.lineWidth = '2';
    this.#context.translate(this.#canvas.width / 2, this.#canvas.height / 2);
    this.#context.beginPath();
    for (let i = 0; i < 2 * Math.PI; i += (Math.PI / 180)) {
      const xCoordinate = 200 * Math.sin((this.#alpha * i) + this.#radians);
      const yCoordinate = 200 * Math.sin((this.#beta * i));
      this.#context.lineTo(xCoordinate, yCoordinate);
    }

    this.#context.stroke();
    this.#context.closePath();
    this.#context.translate(-this.#canvas.width / 2, -this.#canvas.height / 2);
    this.#radians += (Math.PI / 180);

    const RADIANS_INPUT = document.getElementById('radiansInput');
    const RADIANS_VALUE = document.getElementById('radiansValue');

    RADIANS_INPUT.value = ((this.#radians / Math.PI) % 2).toFixed(2);
    RADIANS_VALUE.value = ((this.#radians / Math.PI) % 2).toFixed(2);
    requestAnimationFrame(this.draw);
  }

}

/**
 * @desc The entry point of the program, loads the Lissajous curves
 * and executes them.
 */
function main() {
  let lissajous = new Lissajous();
  lissajous.draw();
}

main();
