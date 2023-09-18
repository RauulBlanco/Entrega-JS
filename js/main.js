// Declaración de variables

let camisetas = [
  { equipo: "boca juniors", talle: "M", stock: 1, precio: 600 },
  { equipo: "river plate", talle: "L", stock: 3, precio: 600 },
  { equipo: "independiente", talle: "M", stock: 2, precio: 450 },
  { equipo: "san lorenzo", talle: "S", stock: 8, precio: 450}
  { equipo: "estudiantes", talle: "M", stock: 5, precio: 450}
  { equipo: "racing", talle: "S", stock: 4, precio: 450}
  { equipo: "colon", talle: "L", stock: 15, precio: 450}
  
];

let totalCompra = 0;
let carritoCompra = []; // Uso un array para llevar un registro de las compras

// Función para mostrar las camisetas disponibles

function mostrarCamisetasDisponibles() {
  let mensaje = "Camisetas disponibles:\n";
  for (let i = 0; i < camisetas.length; i++) {
    mensaje += `${camisetas[i].equipo} - Talle: ${camisetas[i].talle} - Stock: ${camisetas[i].stock} - Precio: $${camisetas[i].precio}\n`;
  }
  alert(mensaje);
}


