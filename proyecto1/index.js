const moment = require('moment')

const hoy = moment()
console.log(hoy); //me da el momento exacto 


//calculadora de edad 

const fecha_nacimiento = moment('1997-01-26' , 'YYYY-MM-DD')
if (fecha_nacimiento.isValid()) {
    console.log(`Desde mi nacimiento han pasado ${hoy.diff(fecha_nacimiento,'day')} dias`);
}else{
    console.error("No se puede proseguir ya que la fecha es invalida");
}

//cambie la actualizacion de el paquete y asi se ejecuto un error 