!alert("Si gastas mas de $15000 10% descuento \nSi gastas mas de $20000 15% descuento\nSi gastas mas de $25000 20% descuento")

function calcularDescuento() {
  let totalGastos = 0;

  while (true) {
    let montoProducto = prompt("Ingrese el monto del producto (o ingrese 'fin' para finalizar):");

    if (montoProducto.toLowerCase() === "fin") {
      break;
    }

    montoProducto = parseFloat(montoProducto);

    if (isNaN(montoProducto)) {
      alert("Valor inválido. Intente nuevamente.");
      continue;
    }

    totalGastos += montoProducto;
  }

  let descuento = 0;

  if (totalGastos >= 15000) {
    if (totalGastos >= 25000) {
      descuento = 0.2; // 20% de descuento
    } else if (totalGastos >= 20000) {
      descuento = 0.15; // 15% de descuento
    } else {
      descuento = 0.1; // 10% de descuento
    }
  }

  let porcentajeDescuento = descuento * 100;
  let montoAPagar = totalGastos - (totalGastos * descuento);

  alert("Monto a pagar después del descuento: $" + montoAPagar.toFixed(2) + "\nPorcentaje de descuento: " + porcentajeDescuento + "%");
}

// Llamar a la función para calcular el descuento
calcularDescuento();


