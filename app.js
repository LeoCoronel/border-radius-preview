// obtener datos de inputs
const box = document.getElementById("box");

let input1 = document.getElementById("top-left").addEventListener("input", updateRadius);
let input2 = document.getElementById("top-right").addEventListener("input", updateRadius);
let input3 = document.getElementById("bottom-left").addEventListener("input", updateRadius);
let input4 = document.getElementById("bottom-right").addEventListener("input", updateRadius);

const copyBtn = document.getElementById("copyBtn");

// Width and height

let width = document.getElementById("width").addEventListener("input", updateWidthAndHeight);
let height = document.getElementById("height").addEventListener("input", updateWidthAndHeight);

// Funcion para update width y height

function updateWidthAndHeight() {
  let width = document.getElementById("width").value;
  let height = document.getElementById("height").value;

  // console.log(width, height);

  let ancho = box.style.width = `${width}px`;
  let alto = box.style.height = `${height}px`;
}

// Se realiza el update del radius de la caja
function updateRadius() {
  let borderTopLeft = document.getElementById("top-left").value;
  let borderTopRight = document.getElementById("top-right").value;
  let borderBottomLeft = document.getElementById("bottom-left").value;
  let borderBottomRight = document.getElementById("bottom-right").value;
  
  // console.log(borderTopLeft, borderTopRight, borderBottomLeft, borderBottomRight)

  let border = box.style.borderRadius = `${borderTopLeft}px ${borderTopRight}px ${borderBottomRight}px ${borderBottomLeft}px`;

  // Agregamos los estilos para utilizarlos en el copy to clipboard
  document.getElementById("radius-input").value = `border-radius: ${border};`;

  return border;
};

copyBtn.addEventListener('click', function(e) {
  e.preventDefault();
  let text = document.getElementById("radius-input");
  text.select();
  document.execCommand('copy');
})