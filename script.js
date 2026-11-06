
var numSquares = 6;

var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");

var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

var pickedColor = pickColor();

colorDisplay.textContent = pickedColor;


// Eventos de los botones
easyButton.addEventListener("click", function() {

    numSquares = 3;

    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");

    reset();

});

hardButton.addEventListener("click", function() {

    numSquares = 6;

    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");

    reset();

});

resetButton.addEventListener("click", function() {

    reset();

});


// Eventos de los cuadrados
for (var i = 0; i < squares.length; i++) {

    squares[i].addEventListener("click", function() {

        var clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {

            message.textContent = "¡Correcto!";

            changeColors(pickedColor);

            h1.style.backgroundColor = pickedColor;

            resetButton.textContent = "PLAY AGAIN?";

        } else {

            this.style.backgroundColor = "#232323";

            message.textContent = "Intentalo nuevamente";

        }

    });

}


// Función para elegir un color ganador
function pickColor() {

    var random = Math.floor(Math.random() * colors.length);

    return colors[random];

}


// Función para generar colores aleatorios
function randomColor() {

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

}


// Función para generar el arreglo de colores
function generateRandomColors(num) {

    var arr = [];

    for (var i = 0; i < num; i++) {

        arr.push(randomColor());

    }

    return arr;

}


// Función para cambiar todos los cuadrados
function changeColors(color) {

    for (var i = 0; i < squares.length; i++) {

        squares[i].style.backgroundColor = color;

    }

}


// Función para reiniciar el juego
function reset() {

    colors = generateRandomColors(numSquares);

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    message.textContent = "";

    resetButton.textContent = "NEW COLORS";

    h1.style.backgroundColor = "steelblue";

    for (var i = 0; i < squares.length; i++) {

        if (colors[i]) {

            squares[i].style.display = "block";

            squares[i].style.backgroundColor = colors[i];

        } else {

            squares[i].style.display = "none";

        }

    }

}