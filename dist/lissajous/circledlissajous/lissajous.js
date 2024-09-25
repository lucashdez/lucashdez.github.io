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

  /** @private {Boolean} */
  #animatePoint = true;

  /** @private {Boolean} */
  #animateGap = true;

  /** @private {Number} */
  #pointLocation = 0;
  /**
   * @constructor Takes the canvas and the context, assigns the proper width
   * and height and draws the grid to the canvas.
   */
  constructor() {
    this.#canvas = document.getElementById("myCanvas");
    this.#canvas.style.width = "100%";
    this.#canvas.style.height = "100%";
    this.#canvas.width = this.#canvas.offsetWidth;
    this.#canvas.height = this.#canvas.offsetHeight;
    this.#context = this.#canvas.getContext("2d");
    this.#drawGrid();
    this.#watchControlGlider();
    this.#watchControlTextbox();
    this.#watchButtons();
  }

  /**
   * @method drawGrid
   * @desc This function draws the grid of the Lissajous curve
   */
  #drawGrid() {
    /** x Axis */
    this.#context.moveTo(0, this.#canvas.width / 2 - 150);
    this.#context.lineTo(this.#canvas.width, this.#canvas.width / 2 - 150);
    this.#context.stroke();
    /** y Axis */
    this.#context.moveTo(this.#canvas.height / 2 + 150, 0);
    this.#context.lineTo(this.#canvas.height / 2 + 150, this.#canvas.height);
    this.#context.stroke();

    this.#context.font = "20px Arial";
    this.#context.fillText(
      "0",
      this.#canvas.width / 2,
      this.#canvas.height / 2,
    );
    let xAugments = 0.1;
    for (
      let separator = this.#canvas.width / 2;
      separator < this.#canvas.width;
      separator += 60
    ) {
      if (separator === this.#canvas.width / 2) continue;
      this.#context.fillText(
        xAugments.toFixed(1),
        separator,
        this.#canvas.width / 2 - 160,
      );
      xAugments += 0.1;
    }
    xAugments = -0.1;
    for (
      let separator = this.#canvas.width / 2;
      separator > 0;
      separator -= 60
    ) {
      if (separator === this.#canvas.width / 2) continue;
      this.#context.fillText(
        xAugments.toFixed(1),
        separator,
        this.#canvas.width / 2 - 160,
      );
      xAugments -= 0.1;
    }
    let yAugments = -0.1;
    for (
      let separator = this.#canvas.height / 2;
      separator < this.#canvas.height;
      separator += 60
    ) {
      if (separator === this.#canvas.height / 2) continue;
      this.#context.fillText(
        yAugments.toFixed(1),
        this.#canvas.height / 2 + 100,
        separator,
      );
      yAugments += 0.1;
    }
    yAugments = 0.1;
    for (
      let separator = this.#canvas.height / 2;
      separator > 0;
      separator -= 60
    ) {
      if (separator === this.#canvas.height / 2) continue;
      this.#context.fillText(
        yAugments.toFixed(1),
        this.#canvas.height / 2 + 100,
        separator,
      );
      yAugments += 0.1;
    }
  }

  /**
   * @method watchControls
   * @desc This function updates the values in the input tables
   */
  #watchControlGlider() {
    let alphaInput = document.getElementById("alphaInput");
    let alphaValue = document.getElementById("alphaValue");

    let betaInput = document.getElementById("betaInput");
    let betaValue = document.getElementById("betaValue");

    let radiansInput = document.getElementById("radiansInput");
    let radiansValue = document.getElementById("radiansValue");

    /** Event listener to the alpha value */
    alphaInput.addEventListener(
      "input",
      () => {
        this.#alpha = alphaInput.value;
        alphaValue.value = this.#alpha;
      },
      false,
    );

    /** Event listeners to the beta value */
    betaInput.addEventListener(
      "input",
      () => {
        this.#beta = betaInput.value;
        betaValue.value = this.#beta;
      },
      false,
    );

    /** Event listeners to the radians value */
    radiansInput.addEventListener(
      "input",
      () => {
        this.#radians = radiansInput.value;
        radiansValue.value = this.#radians;
      },
      false,
    );
  }

  /**
   * @method watchControlTextbox
   * @desc This function updates the values in the gliders
   */
  #watchControlTextbox() {
    let alphaInput = document.getElementById("alphaInput");
    let alphaValue = document.getElementById("alphaValue");

    let betaInput = document.getElementById("betaInput");
    let betaValue = document.getElementById("betaValue");

    let radiansInput = document.getElementById("radiansInput");
    let radiansValue = document.getElementById("radiansValue");

    /** Changes to alpha value */
    alphaValue.addEventListener(
      "input",
      () => {
        this.#alpha = alphaValue.value;
        alphaInput.value = this.#alpha;
      },
      false,
    );

    /** Changes to beta value */
    betaValue.addEventListener(
      "input",
      () => {
        this.#beta = betaValue.value;
        betaInput.value = this.#beta;
      },
      false,
    );

    /**Changes to radians value*/
    radiansValue.addEventListener(
      "input",
      () => {
        this.#radians = radiansValue.value;
        radiansInput.value = this.#radians;
      },
      false,
    );
  }

  /**
   * @method update
   * @desc Updates the draw
   */
  draw = () => {
    // TODO: Create halo like ring
    this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
    this.#drawGrid();
    this.#context.strokeStyle = "Black";
    this.#context.lineWidth = "2";
    this.#context.translate(this.#canvas.width / 2, this.#canvas.height / 2);
    this.#context.beginPath();
    for (let i = 0; i < 2 * Math.PI; i += Math.PI / 180) {
      const xCoordinate = 200 * Math.sin(this.#alpha * i + this.#radians);
      const yCoordinate = 200 * Math.sin(this.#beta * i);
      this.#context.lineTo(xCoordinate, yCoordinate);
    }
    this.#context.stroke();
    this.#context.closePath();

    this.#context.beginPath();
    for (let i = 0; i < 2 * Math.PI; i += Math.PI / 180) {
      const xCoordinate = 205 * Math.sin(this.#alpha * i + this.#radians);
      const yCoordinate = 210 * Math.sin(this.#beta * i);
      this.#context.lineTo(xCoordinate, yCoordinate);
    }

    this.#context.stroke();
    this.#context.closePath();
    let xDotPosition = 0;
    let yDotPosition = 0;
    /** Gets the position for the dot, only if the boolean is true */
    if (this.#animatePoint) {
      this.#context.beginPath();
      xDotPosition += 200 *
        Math.sin(this.#alpha * this.#pointLocation + this.#radians);
      yDotPosition += 200 * Math.sin(this.#beta * this.#pointLocation);

      this.#context.arc(
        xDotPosition,
        yDotPosition,
        5,
        0,
        2 * Math.PI,
        true,
      );

      this.#context.closePath();
    }

    this.#context.translate(-this.#canvas.width / 2, -this.#canvas.height / 2);
    if (this.#animateGap) {
      this.#radians += Math.PI / 180;
    }

    const RADIANS_INPUT = document.getElementById("radiansInput");
    const RADIANS_VALUE = document.getElementById("radiansValue");

    RADIANS_INPUT.value = ((this.#radians / Math.PI) % 2).toFixed(2);
    RADIANS_VALUE.value = ((this.#radians / Math.PI) % 2).toFixed(2);

    this.#pointLocation += Math.PI / 180;

    requestAnimationFrame(this.draw);
  };

  /**
   * @method watchButtons This method adds the event listeners for the buttons
   */
  #watchButtons() {
    let stopPointButton = document.getElementById("stopPoint");
    let stopGapButton = document.getElementById("stopGap");
    let stopMButton = document.getElementById("stopM");
    let stopNButton = document.getElementById("stopN");

    /** Event Point button */
    stopPointButton.addEventListener("click", () => {
      this.#animatePoint = this.#animatePoint ? false : true;
      if (this.#animatePoint) {
        stopPointButton.style.backgroundColor = "red";
        stopPointButton.textContent = "Parar Punto";
      } else {
        stopPointButton.style.backgroundColor = "green";
        stopPointButton.textContent = "Animar Punto";
      }
    });

    /** Event to Gap button */
    stopGapButton.addEventListener("click", () => {
      this.#animateGap = this.#animateGap ? false : true;
      console.log(this.#animateGap);
      if (this.#animateGap) {
        stopGapButton.style.backgroundColor = "red";
        stopGapButton.textContent = "Parar desfase";
      } else {
        stopGapButton.style.backgroundColor = "green";
        stopGapButton.textContent = "Animar desfase";
      }
    });

    /** Event to Alpha button */

    /** Event to Beta button */
  }
}

/**
 * @desc The entry point of the program, loads the Lissajous curves
 * and executes them.
 */
function main() {
  const lissajous = new Lissajous();
  lissajous.draw();
}

main();
