// Funcion para calcular la tasa de descuento para proyecto grandes
function priceWithMonthlyDiscount(tarifa, dias, descuento) {
    // A continuacion declaramos las variables que seran utilizadas para realizar dichos calculos
    let hoursInBudget = tarifa * 8;
    let tarifa_diaria = (dias % 22) * hoursInBudget
    let Descuento = 1 - descuento
    let meses = Math.floor(dias / 22);
    let precio_mensual = hoursInBudget * 22;
    let precio_descuento = (precio_mensual * meses) * Descuento
    // Redondeamos el resultado del Precio descuento + la tarifa diaria
    let precio_total = Math.ceil(precio_descuento + tarifa_diaria);
    
    return precio_total;
  }
  // Ponemos los valores que deseamos en cada parametro
 alert(priceWithMonthlyDiscount(89, 230, 0.42))
