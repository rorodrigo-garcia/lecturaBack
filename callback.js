//una funcion pasaada por parametros 

function llamaCallback ( parametro , functionParams){ //la funcion es functionParamas
    return functionParams(parametro)
}
llamaCallback('Esto es el parametro' , ( texto )=>{console.log(texto); })

const array = [1,2,3,4,5,6,7]
let callback = (num)=> num*2 //lo que haga aca lo puedo pasar como parametro en el map
const array2 = array.map(callback)
console.log(array2);

const arra = [1,2,3,4,5]

function mapSinMap (array , callback) {

        let nuevoMap = []
        for (let i = 0 ; i < array.length ; i++) {
            const element = callback(array[i])
            nuevoMap.push(callback(element))
        }
        return nuevoMap
}

const total = mapSinMap(arra , num => num *2)
console.log(total); //esto seria un map sin un map

Array.prototype.elLogueo = function log (){
    console.log('asi se pasaria ');
}

const intento = arra.elLogueo('esto tambien lo pasa')
    console.log(intento);


    //operaciones callback 

const suma =( num1 , num2) => num1 + num2
const resta =( num1 , num2) => num1 - num2
const multi =( num1 , num2) => num1 * num2
const divi =(err, num1 , num2) => err === null ? num1 / num2 : 'no se puede dividir por 0'

const operacion = (num1, num2 , cb) =>{
    let resultado = cb(num1 ,num2)
    console.log('este es el resultado' , resultado);
}
operacion(1,3,multi)

