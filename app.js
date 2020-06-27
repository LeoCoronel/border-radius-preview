// obtener datos de inputs
const box = document.getElementById("box");
let input1 = document.getElementById("top-left").addEventListener("input", updateRadius);
let input2 = document.getElementById("top-right").addEventListener("input", updateRadius);
let input3 = document.getElementById("bottom-left").addEventListener("input", updateRadius);
let input4 = document.getElementById("bottom-right").addEventListener("input", updateRadius);
// const btnCopy = document.getElementById("btnCopy").addEventListener("click", copyClipboard);

// Se realiza el update del radius de la caja
function updateRadius() {
  let borderTopLeft = document.getElementById("top-left").value;
  let borderTopRight = document.getElementById("top-right").value;
  let borderBottomLeft = document.getElementById("bottom-left").value;
  let borderBottomRight = document.getElementById("bottom-right").value;
  
  console.log(borderTopLeft, borderTopRight, borderBottomLeft, borderBottomRight)

  let border = box.style.borderRadius = `${borderTopLeft}px ${borderTopRight}px ${borderBottomRight}px ${borderBottomLeft}px`;
  
  return border;
};

