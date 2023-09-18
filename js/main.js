// Declaración de variables

let camisetas = [
  { equipo: "Boca Juniors", talle: "M", stock: 78, precio: 1200 },
  { equipo: "River Plate", talle: "L", stock: 80, precio: 1200 },
  { equipo: "Independiente", talle: "M", stock: 68, precio: 1000 },
  { equipo: "San Lorenzo", talle: "S", stock: 12, precio: 1000},
  { equipo: "Estudiantes", talle: "M", stock: 34, precio: 1000},
  { equipo: "Racing", talle: "S", stock: 0, precio: 1000},
  { equipo: "Colon", talle: "L", stock: 89, precio: 450},
  
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

// Función para realizar la compra

function realizarCompra() {
  let equipoCompra = prompt("Ingrese el nombre del equipo que desea comprar:");
  let talleCompra = prompt("Ingrese el talle que desea:");

  // Convertir las entradas del usuario a minúsculas
  equipoCompra = equipoCompra.toLowerCase();
  talleCompra = talleCompra.toLowerCase();

  for (let i = 0; i < camisetas.length; i++) {
    // Convertir los valores del objeto a minúsculas antes de comparar
    let equipoActual = camisetas[i].equipo.toLowerCase();
    let talleActual = camisetas[i].talle.toLowerCase();

    if (equipoActual === equipoCompra && talleActual === talleCompra) {
      if (camisetas[i].stock > 0) {
        totalCompra += camisetas[i].precio;                                   // agregar el precio al total de compras
        carritoCompra.push(camisetas[i]);                                     // agregar la camiseta al carrito
        camisetas[i].stock -= 1;                                             // restar 1 al stock
        alert("¡Compra realizada con éxito!");

        mostrarCamisetasDisponibles();                                       //ayuda memoria para el usuario
      } else {
        alert("Lo sentimos, no hay stock disponible para esa camiseta.");
      }
      return;
    }
  }
  alert("Lo sentimos, no encontramos la camiseta que busca.");
}


// Función para calcular el total con IVA

function calcularTotalConIVA() {
  let totalConIVA = totalCompra * 1.21;                                     // aplicar el 21% de IVA al total
  alert(`Total a pagar + IVA: $${totalConIVA.toFixed(2)}`);
}

// mostrar las camisetas disponibles al inicio

mostrarCamisetasDisponibles();

// flujo principal

while (confirm("¿Desea realizar una compra?")) {
  realizarCompra();
}
calcularTotalConIVA();
