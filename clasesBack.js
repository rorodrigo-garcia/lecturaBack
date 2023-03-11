//clase 1
//clases de datos 
//datos primitivos,string,number , boolean,null , undefined
//datos objeto,objeto,array y funciones 
//
//variables en JS
//depende del scope una variable puede cambiar su valor 
//
let nombre = "Rodrigo"
let edad = 25 //int
const precio = 200.10 //float
let series = ["Last of Fast" , "The boys"]
let peliculas = ["The avengers" , "Tu vieja" ]

edad = edad+1
series.push("Moon Knight")

//Hablamos un poco sobre el scope de let y const 
//Un bloque de Js es algo delimitado por { } 
let rodrigo = "rodrigo"
{
    let rodrigo = "Garcia"
}
//en ambos casos no se tocan los scope ya que uno esta dentro de las llaves y el otro por fuera
//cuando un scope global es global al archivo 
let i = 0
function foo(){
    i=1
    let j=2
    if(true){
        console.log(i) //de esta manera i vale 1 y no 0 como el global
        console.log(j)
    }
}
foo()
console.log(i) //de esta manera me va a llamar al let i de 0 

//const y let el ambito del scope es el mismo ,la diferencia es que const no se puede cambiar y let si 
//Todo lo que pueda dar de valor a var puede ser reasignable,entonces puede ser peligroso
//Cuando una variante es mutable es cuando se puede cambiar el valor 
//esto siempre y cuando se cambie en un objeto 
let nombre1 = {
    nombre: "Rodrigo"
}
nombre1.nombre="Rodrigo Garcia"
//de esta manera mute el objeto
//una funcion son bloques de ejecucion que trabajan sobre un scope interno 
function nombreDeLaFuncion(params){ //no es recomendable pasar mas de 2 parametros ,uno es el ideal, para pasar uno  y que sea comodo pasamos un objeto
    let nombre = params 
    return nombre
}
console.log(nombreDeLaFuncion("Rodrigo")) //de esta manera me va a devolver "rodrigo"

function sumar (numero1 , numero2){
    let resultado = numero1 + numero2
    return resultado
}
console.log(sumar (1,2))

//la diferencia con la tipo flecha es que las arrow function son aninamos ,en cambio las function clasicas pueden ser o no 
//otra diferencia mas grande es el scope que es distinto 
//la arrow function permite el return implisito,siempre y cuando no tenga llaves 
// const arrow = nombre =>{

// } de esta manera tambien puedo declarar una function 
// `` backtift 
//gracias a esto podemos insertar js en una oracion 

 const mostrarLista = (arrayLista=[]) =>{ //si no le pongo nada es undefined 
     if(arrayLista.lenght === 0)  
     return 'Lista Vacia'    
     arrayLista.forEach(item => console.log(item)) //y aca recorri el array 
     return `El tamaño d ela lista es ${arrayLista.length}`  //esto es para que me devuelva el total de los objetos dentro de la lista
}
 console.log(mostrarLista(["rodrigo" , "Julieta"]))  //Esto funciono ya que yo aca le di los valores
 //clases,una es una representacion de una entidad, sirve para modelar multiples cosas,como un auto,perosona o bien administrar archivos,un conector a base de datos,etc

class Persona { //creo el molde , a las clases se le puede agregar metodos (se puede leer como una funcion)
    
    constructor(nombre,apellido){ //esto se leer como una function
        this.nombre= nombre,
        this.apellido = apellido
    } //de esta manera creo una clase con estos dos atributos
    saludar(){ //se declaran sin el function ,ni const ,ni let
       return `${this.nombre} ${this.apellido}  dice hola`
    }
    despedirse(){
        return    `${this.nombre} ${this.apellido} dice chau` //a estas accedo como si fueran un metodo
    }

}

const instancia = new Persona("Rodrigo" , "Garcia   ")

console.log(instancia.saludar())


//una variable estatica se declara con la palabra static ,y esta misma es un metodo al que puedo acceder sin crear una instancia,osea,sin los parentesis
class Contador {
    constructor(responsable){
        this.responsable= responsable,
        this.contador = 0 //es un contador responsable 
    } 
    static contadorGlobal= 0 //y este un contador global

    getResponsable = () => this.responsable //de esta manera devuelve quien es el responsable
    contar =() =>{
        this.contador ++ //esto puede ser conteo = conteo +1 o conteo+=1
        Contador.contadorGlobal++ //esto lo puedo hacer ya que la funcion static lo hace global
    }

    getContador =() => this.contador //de esta manera los hice visible a ambos
    getCuentaGlobal = () => Contador.contadorGlobal
}

const contador = new Contador('Rodri') //de esta manera instancie un objeto
const contador1 = new Contador ('Juli')
console.log(contador.getResponsable()) // de esta manera en la consola voy a mostrar el nombre ya que declare que getResponsable es igual a responsanble
console.log(contador.getContador())
console.log(contador.getCuentaGlobal())
contador.contar()
contador.contar()
contador.contar()
console.log(contador.getContador())
console.log(contador.getCuentaGlobal())


//clase 2
//Recordar que el metodo include se utiliza para buscar objetos que vayan con la descripcion 
const valores = [1,2,3,4]
const nuevosValores = valores.map(x => x**2)
console.log(nuevosValores)
console.log(valores.includes(4)); //devuelve true o false
console.log(valores.includes(5));
if (valores.includes(2)){
    return  console.log( 'Si esta')
} else{
    console.log( 'no,no se encuentra')
} //de esta manera lo podria ejecutar en un codigo 
//asinc away es sugar syntax de las promesas , transforma las funciones en asincronicas ,para manejo de las promesas
//El metodo entries se utiliza para crear un array de otro array 
const impuestos ={
    impuesto1: 26,
    impuesto2: 30,
    impuesto3: 25
} 
let valoresDeimpuestos = Object.entries(impuestos)
console.log(valoresDeimpuestos); //esta en aVer

//mas en la misma pagina
//vimos la propiedad spread , esto seria ... ,que lo que hace es copiar un objeto 
//ejemplo en su archivo 
//tambien mostramos el metodo rest ,que muestra el resto de las propiedades del mismo objeto
//El metodo reduce se utiliza para un array en el que itera ,este mismo recibe dos parametros,a y b o count y e , 0 ,siempre inicia en 0 ya que empieza por ahi
//en si lo que hace es reduce cada elemeento del array 
const array1 = [1,2,3,4]
const inicial = 0
const totales = array1.reduce((count , e)=>count + e , inicial)
console.log(totales); //aca no funciona,no se porque pero se puede ver en ejemplo

//Vimos los metodos trim( ) y flat() , esto actua sobre las importaciones 
//flat sirve para deshacer las anidaciones creadas en el array y las deja en un array plano
//trim sirve para validar cadenas enviadas vacias o eliminar los espaciones iniciales y finales
//Tambien esta la importacion dinamica ,esta permite optimizar la utilizacion de recursos ,de esta manera solo importa los modulos necesarios 
//Ej en calculadora e import
//async y await se utiliza como funcion asincronica 
//trim y flat estan en import
//ejemplos de trim y flat

//metodo null ,ejemplo en su archivo

//las variables privadas son las que tienen el # delante ,ejemplo en null

//existen distintos tipos de funciones ,las tradicionales son aquellas que se declaran con function 
//la funcion arrow 
//funcion definida,son las que usualmente se usan para no reasignarse 
//funcion anonima , son las que usualmente se usan para asignarse 
//una callback es una funcion que esta dentro de otra funcion eej en su archivo 
//esta misma tiene varios usos usuales,en un map,en un forEach 
 //si colocas Array.prototipe lo que hagas enesa funcion se puede utilizr en todos los array ,siempre y cuando se lo coloques
// cuando utilizar una callback? Cuando debemos varias acciiones dentro de una funcion
//Como consejo evitar poner una cb dentro de otra cd dentro de otra cd y asi 

//promesas 
//la promesa se define como 
//ej de promesa en archivo
//una promesa tiene como estado 3 , pendiente,resuelto(res) o rechazada (rej)
//el res actua con el then ,tambien actua con el rej ,pero como segundo parametro
//el catch actua como los errores,no como las devoluciones 
//en su mayoria el catch tambien puede capturar los rej 
//el orden como pongamos el then o el catch no afecta,pero siempre se utiliza primero el then
//se pueden colocar varios then en el mismo then 
//sincronismo vs asincronismo 
//sincronismo hace referencia a la ejecucion cascada,osea,se lee el archivo de arriba para abajo 
//las funciones asyncronicas no respetan esto,ya que su funcion se puede ejecutar sin respetar la cascada
//las operaciones sincronicas son bloqueantes,osea,que una funcion no se ejecuta si la atenrior no se ejecuto
//si la idea de es hacer tareas en paralelo el idea es hacer tareas asincronicas
//las funciones asincronicas se pueden definir con un setTiemOut 
//Se puede no pasar el segundo parametro a un setTimeOut,pero no significa que este deje de ser asincronico,se ejecuta sin tiempo 
//las funciones asincronicas no son bloqueantes

//async await . Ya que then y catch tienen el problema del scope,ya que sus scope son limitados a la misma funcion 
//de eswta manera nace el async que signfica que toda esa funcion se debera de ejecutar de manera asincronica y await espera por el resultado de la promesa,es como el then de la promesa
//ejemplo en promesas

//clase 3
//manejo de archivos
//repaso sincronismo , se utilizan cuando queremos hacer varias tareas una tras otra 
//y el asincronismo se utilizan cuando necesitamos que multiples tareas se ejecuten al mismo tiempo 
//setTimeout se utiliza para establecer un temporizador sobre una funcion ,de ahi el segundo valor que se coloca
//ejemplo en sinc
//setInterval hara que se reinicie este conteo y ejecutara la tarea nueva de cada vez ques e cumpla dicho intervalo de tiempo
//este seria que ejecuta una tarea cada determinado timepo,como un bucle 
//ejemplo en sinc

//manejo de archivo
//generalmente el problema con el manejo de archivo es la memoria,ya que resetea todo
//la solucion fue el fs ,que se puede guardar un conjunto de info 
//fyle sistem es un sistema manejador que proporciona node para crear,leer ,actualizar o eliminar un archivo, odicho de otra manera,CRUD
//fs es un modulo nativo ,que es un modulo que no necesita instalacion 
//con un const fs= require('fs') guarda todo fyle sistem ahi
//ejemplos en fs.js
//fs con cb
//ejemplo en fs.js
//fs con promesas ejemplo en fs.js

//Los archivos que se utilizan para almacenar son de tipo JSON 
//JSON stringify lo que hace es convertirlo a texto
//JSON parse los convierte de texto a objeto 
//ejemplo en fs.js

//ventaja y desventaja de usar archivos
//son excelentes para empezar a usar persistencias 
//al ser nativo de node no se instala nada,es muy facil de manipular dentro y fuera del programa

//desventaja : si tenemos muchos productos lo que hace es leer constantemente los objetos netonces consume recursos importantes
//al modificar n dato del archivo necesito reescribir el archivo,al final es facil extraer info de un archivo,ya que todo se guarda ahi 
//Es utilizar para el desarrollo web o es mas propio para sistemas operativos? 
//Es utilizado minimo para el desarrollo web , es mas propio para el sistema operativo

//NODE 
//Es comodo para trabajar en conjunto a JS
//Este mismo con JS permite ir resolviendo problemas y visualizarlos ,ejemplo en trabajoNode.js

//modulos nativos de Node
//fs es uno 
//crypto es otro,sirve para encriptar string y etc
//http ,srive para hacer consultas
//path rutas , ejemplo en userManager 

//manejando modulos de 3eros,permite a los desarrolladores manejar paquetes de terceros
//Npm nos sirve para instalar distintos paquetes 
//el package.json es un archivo que se genera ,el cual contendra el nombre del proyecto,la version,algunos script para correr
//A mendida que vamos instalando paquetes se crea un dependencia y ahi van los paquetes
//se crea un node.module
//una vez instalado podemos poner require y asi llamamos al modulo
//la forma de importar la podemos cambiar ,una vez que ponemos el type: "module" las importaciones cambian y van por import y from
//los import de React
//existen 2 tipos de instalacion,una global y una local
//la global es para cada trabajo ,la local es para esa en especifico
//para actualizar los operadores podemos utilizar  ^ que con esto tenemos la version menor mas alta  ^2.0.6
//de esta ,amera cuando tengamos una instalacion global,con eso lo actualizamos
//es important poner el gitignore,de esta manera podemos ignorar las versiones de nuestras instalaciones
// el operador ~ sirve para par instalar solo los parches,lo que significa que no altera las versiones menores,aligera correciones a bugs del codigo
//ojo con esto ,aveces nos conviene no actualizarlo con esto 
//si no ponemos ningun operador se descargara la actualizacion exacta
//con un npm outdated nos leera las dependecias instaladas y depende lo que nos diga nos dira que nos conviene



