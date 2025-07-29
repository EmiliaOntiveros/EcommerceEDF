//agenda
function agenda(usuario) {
  let day = prompt(`Elige un dia de la semana
    1. Lunes 
    2. Martes
    3. Miercoles
    4. Jueves
    5. Viernes
    6. Sábado
    7. Domingo`);
  switch (
    day //revisar!!!!
  ) {
    case "1":
      alert(`Gracias por tu reserva, ${usuario}!`);
      break;
    case "2":
      alert(`Gracias por tu reserva, ${usuario}!`);
      break;
    case "3":
      alert(`Gracias por tu reserva, ${usuario}!`);
      break;
    case "4":
      alert(`Gracias por tu reserva, ${usuario}!`);
      break;
    case "5":
      alert(`Gracias por tu reserva, ${usuario}!`);
      break;
    case "6":
      alert(`Gracias por tu reserva, ${usuario}!`);
      break;
    case "7":
      alert(
        "Hoy es domingo, en mi religion no se trabaja este día, elegí otro."
      );
      break;
    default:
      alert("Elegiste el camino del mal, vuelve a intentar.");
      agenda(usuario); //Devuelve llamarAction (inicio)
      console.alert(
        "crear division para horarios, más específico la selección de turnos"
      );
  }
}

// Cotización
const preciosTratamientos = [
  { nombre: "masajes", precio: 20000 },
  { nombre: "uñas", precio: 15000 },
  { nombre: "entrenamiento", precio: 35000 },
  { nombre: "danza", precio: 40000 },
];

function cotizacion() {
  const tratamiento = prompt(`Elige un tratamiento:
  1 - Masajes
  2 - Uñas
  3 - Entrenamiento funcional
  4 - Danza`);
  const cuanto = prompt("Cuántas sesiones te gustaria cotizar?");
  const cantidad = Number(cuanto);
  precio = 0;
  nombre = "";
  switch (tratamiento) {
    case "1":
      precio = preciosTratamientos[0].precio;
      nombre = "Masajes";
      break;
    case "2":
      precio = preciosTratamientos[1].precio;
      nombre = "Uñas";
      break;
    case "3":
      precio = preciosTratamientos[2].precio;
      nombre = "Entrenamiento funcional";
      break;
    case "4":
      precio = preciosTratamientos[3].precio;
      nombre = "Danza";
      break;
    default:
      alert("Opción inválida. Volvé a intentar.");
      return cotizacion();
  }

  const total = precio * cantidad;
  alert(
    `Abonarías un total de $${total} por ${cantidad} sesión(es) de ${nombre}.`
  );
}

// reserva
let reservasAgg = [];
function reserva(tratamiento) {
  let usuario = prompt("Ingresa tu nombre y apellido");
  agenda(usuario);
  reservasAgg.push({
    usuario: usuario,
    tratamiento: preciosTratamientos[tratamiento].nombre,
  });
  console.log(reservasAgg);
}

function actividad() {
  const tratamiento = prompt(`Elige un tratamiento:
  1 - Masajes
  2 - Uñas
  3 - Entrenamiento funcional
  4 - Danza`);
  reserva(tratamiento);
}

// Navegación INICIAL!!
function inicio(operacion) {
  switch (operacion) {
    case "1":
      actividad();
      break;
    case "2":
      cotizacion();
      break;
    default:
      llamarAction(); //redirige llamarAction
  }
}

function llamarAction() {
  const operacion = prompt(`Bienvenido! ¿En qué puedo ayudarte?

  1 - Sacar un turno
  2 - Hacer una cotización`);
  console.log("Bienvenido!");
  inicio(operacion);
}

// Inicio
llamarAction();
