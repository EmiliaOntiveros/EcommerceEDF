const section = document.querySelector("div.ttratamiento");
const myTratamiento = tratamientos.map(
  (tratamiento) =>
    `<div class="service-card">
        <img src="${tratamiento.imagen}">
        <div class="service-info">
            <h3>${tratamiento.name}</h3>
            <p class="price">$${tratamiento.precio.toLocaleString("es-AR")}</p> 
            <p>${tratamiento.tipo}</p>
            <a href="./servicios.html?id=${tratamiento.id}">
                <button class="view-more-button">Ver más</button>
            </a>
        </div>
    </div>`
);
section.innerHTML = myTratamiento.join("");
