// Funcion para saber la tarifa diaria dada una tarifa especifica
function dayRate(tarifa){
    // Luego Se calcula las 8 horas por el total de dias
    let hoursInBudget = tarifa * 8;
    return hoursInBudget;
}
// Por ultimo Se define el valor de la tarifa diaria
alert(dayRate(89))
