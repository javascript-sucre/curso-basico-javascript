// var nombre = "alejandro",
//   apellido = "zelaya",
//   edad = 25;

var ale = {
  nombre: "alejandro",
  apellido: "zelaya",
  edad: 25,
  ingeniero: true,
  dev: true,
  cocinero: false,
  cantante: true,
  dj: false,
  guitarrista: true,
  drone: true
};

function profesiones(persona) {
  console.log(`${persona.nombre} es: `);

  if (persona.ingeniero) {
    console.log("ingeniero");
  }

  if (persona.dev) {
    console.log("dev");
  }

  if (persona.cocinero) {
    console.log("cocinero");
  }

  if (persona.cantante) {
    console.log("cantante");
  }

  if (persona.dj) {
    console.log("dj");
  }

  if (persona.guitarrista) {
    console.log("guitarrista");
  }

  if (persona.drone) {
    console.log("vuela drone");
  }
}

profesiones(ale);
