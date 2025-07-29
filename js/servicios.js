const param = new URLSearchParams(window.location.search);
const ttId = param.get("id");
const tratamiento = tratamientos.find((t) => t.id === Number(ttId));

const h1 = document.querySelector("h1");
h1.textContent = tratamiento.name;
const h2 = document.querySelector("h2");
h2.textContent = tratamiento.tipo;
const div = document.querySelector("div.price");
div.textContent = `$${tratamiento.precio.toLocaleString("es-AR")}`;
const p = document.querySelector("p.description");
p.textContent = tratamiento.descripcion;
const img = document.querySelector("img.service-image");
img.src = tratamiento.imagen;
//DESCRIPCION DE SERVICIO A AGENDAR
const params = new URLSearchParams(window.location.search);
const aggId = params.get("id");
document.querySelector(".schedule-button").addEventListener("click", () => {
  window.location.href = `agenda.html?id=${tratamiento.id}`;
});
