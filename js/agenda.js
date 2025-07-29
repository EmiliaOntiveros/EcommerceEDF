document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const tratamientoId = params.get("id");
  const nombreTratamientoSpan = document.getElementById(
    "nombre-tratamiento-seleccionado"
  );
  const tipoTratamientoSpan = document.getElementById(
    "tipo-tratamiento-seleccionado"
  );
  const priceTratamientoSpan = document.getElementById(
    "precio-tratamiento-seleccionado"
  );

  const formAgenda = document.getElementById("form-agenda");
  const inputNombre = document.getElementById("nombre-completo");
  const inputEmail = document.getElementById("email-usuario");
  const inputFecha = document.getElementById("fecha-turno");
  const inputHora = document.getElementById("hora-turno");
  function guardarTurno(turno) {
    //LOCALSTORAGE - JSON PARSE
    let turnosAgendados =
      JSON.parse(localStorage.getItem("turnosAgendados")) || [];
    turnosAgendados.push(turno);

    // JSON STRINGIFY
    localStorage.setItem("turnosAgendados", JSON.stringify(turnosAgendados));
  }
  formAgenda.addEventListener("submit", function (e) {
    e.preventDefault();

    const turno = {
      nombre: inputNombre.value,
      email: inputEmail.value,
      fecha: inputFecha.value,
      hora: inputHora.value,
      tratamientoId: tratamientoId,
    };

    guardarTurno(turno);
    //alert("Turno agendado exitosamente!");     NO ALERTS, POR ESO COMENTADO XD
    formAgenda.reset();
  });
});
