// Funcion para calcular el numero de dias de trabajo dado un presupuesto fijo
function PresupuestoFijo(presupuesto, dias){
    // Primero se calcula el total de dias por horas de trabajo
    let daysInBudget = dias * 8;
    // Luego se utiliza Math.Floor para realizar el redondeo de la division del presupuesto que vamos a digitar entre los dias anteriormente
    // digitados
    let diastotal = Math.floor(presupuesto / daysInBudget);
    return diastotal;
}
// Por ultimo se define el valor del prespuesto y la tarifa diaria
alert(PresupuestoFijo(2000, 89));