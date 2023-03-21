var n1 = document.getElementById("n1");
var n2 = document.querySelector("input#n2");
var r = document.getElementById("r");

document.addEventListener("input", () => {
    var resultado = n1.valueAsNumber + n2.valueAsNumber;
    r.textContent = isNaN(resultado) ? "" : resultado;
});
