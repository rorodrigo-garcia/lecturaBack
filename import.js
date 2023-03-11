

// let modo = 'calculadora'

// async function ejemploImportar(){
//     if (modo === 'calculadora') {
//         const { Calculadora } = await import ("./Calculadora.js")
//         const calculadora = new Calculadora()
//         console.log(calculadora.sumar(2,3));
//     }
// }

// ejemploImportar()

let nombre= '    Hola rodri'
console.log(nombre.trim()); //le saca los espacios , lo aplano ,saco los espacios de atras y de adelante

let mensajes = []
let intentoMensaje = '            ele e      '
if (intentoMensaje.trim().length > 0) {
        mensajes.push(intentoMensaje.trim())
        console.log(intentoMensaje);
}else{
    console.log('mensaje vacio'); // Como puse ele e me da que tiene algo ,pero si esta vacio al ser igual que 0 pasaria al else
}
const array = [1,[2,3],4,5,[[6,7]]]
 console.log(array.flat()); //aplane el trabajo 
console.log(array.flat(2)); //esto significa que lo va a aplanar una vez sola,llega lo mas lejos posible,osea,si tengo un array,dentro de otro array en otro array los itera a todos


