// let screenOperation = document.getElementById("screen-operation");
let result = document.getElementById("result");
let button = document.getElementById("button");

let operacionString = (botonContenido) => {
  if (result.textContent === "0") {
    result.textContent = "";
  }
  result.textContent += botonContenido;
};

let mostrarResultado = () => {
  result.textContent = eval(result.textContent);
};

let limpiarPantalla = () => {
  result.textContent = "0";
};

button.addEventListener("click", (e) => {
  let btnContent = e.target.textContent;

  if (btnContent === "C") {
    limpiarPantalla();
  } else if (btnContent === "=") {
    mostrarResultado();
  } else {
    operacionString(btnContent);
  }
});
