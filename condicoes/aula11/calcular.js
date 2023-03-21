function calcular() {
  const vel_input = Number(document.querySelector("input#txtvel").value);
  const res = document.querySelector("span#res");
  res.innerHTML = `<p>Sua velocidade foi de ${vel_input}Km/h!</p> `;
  if (vel_input > 100) {
    res.innerHTML += `<p>Você ultrapassou a velocidade permitida. MULTADO!</p>`;
  } else {
    res.innerHTML += "<p>Dirija com cuidado!</p>";
  }
}
