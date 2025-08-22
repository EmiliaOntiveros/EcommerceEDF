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
  const inputTelefono = document.getElementById("telefono-usuario");
  const inputFecha = document.getElementById("fecha-turno");
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
      //turnO pertenece a array de objetos
      nombre: inputNombre.value,
      email: inputEmail.value,
      telefono: inputTelefono.value,
      fecha: inputFecha.value,
      tratamientoId: tratamientoId,
    };

    guardarTurno(turno);

    const turnos = () =>
      //turnoS pertenece a fetch
      fetch(`https://68a68c00639c6a54e99f05ea.mockapi.io/turnos`, {
        method: "post", //crear turno
        headers: {
          "Content-Type": "application/json", //se manda por json
        },
        body: JSON.stringify(turno),
      })
        .then((response) => response.json())
        .then((data) => {
          formAgenda.reset();
          Swal.fire({
            icon: "success",
            title: "¡Tu turno ha sido confirmado!",
            text: `Turno #${data.id} registrado correctamente.`,
            timer: 2500,
            showConfirmButton: false,
          });
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "No se pudo guardar el turno. Intenta nuevamente.",
          });
        });
    turnos();
  });
});
