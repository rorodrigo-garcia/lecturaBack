const fs = require('fs');

//sincronico 

fs.writeFileSync('./data.txt' , 'Este es el texto a guardar ' , 'utf-8') //escribe en el archivo data o lo crea,el texto que se guarda es el segndo y el metodo 
fs.appendFileSync('./data.txt' , "Este es un texto agregado " , 'utf-8') //de esta manera agrego un texto dentro del archivo ya creado
console.log(fs.existsSync('./data.txt')); //pregunta si existe con el nombre a corroborar,responde true o false
const archivo = fs.readFileSync('./data.txt' , 'utf-8') //de esta manera vamos a leer el archivo que marcamos,necesitamos marcar el metodo que se guardo en el mismo
console.log(archivo);
fs.unlinkSync('./data.txt') //de esta manera lo borro 

//Ejemplo con cb
//esta tiene 2 parametros
//el manejo por cb es totalmente asincronico 


fs.writeFile('.archivoCb.txt' , 'esto es lo que se crea en el archivo' , 'utf-8' ,(err)=>{
    if (err) {
        console.log(err);
    }
}) //la unica diferencia es que maneja el err
fs.readFile('.archivoCb.txt' , 'utf-8' ,(err,data)=>{
    if (err) {
        console.log(err);
    }
    console.log(data);//lo que lo diferencia hasta de el mismo tipo de trabajo es que este tiene data,un segundo parametro,los otros no
}) 
//le podemos dar otro nombre a data,puede ser "resultado" o lo que quiera,este es lo que lee en el archivo

fs.appendFile('.archivoCb.txt','esto es un agregado' , 'utf-8', (err)=>{
    console.log(err);
})
//lo bueno de tener una cb es que puedo generar acciones dentro de la misma
//si pusiera el apendFile dentro del readFile primero lo leeria y luego lo agregaria

fs.unlink('.archivoCb.txt'  , (err)=>{
    if (err) {
        console.log(err);
    }
    console.log("Termino de borrar");
})

//fs con promesas
//estos se utilizan siempre con un fs.promises
//podria usar const {promises:fs} = require('fs') ,de esta manera lo desestructuro y se escribe todo sin el promises
// fs.promises.writeFile('.promesas.txt' , 'Creando el archivo con promesas' , 'utf-8')
// .then(()=>console.log("Termine de escribir el archivo")).catch((err)=>console.log(err))
//esto podria leerse dentro de una funcion async
const usuarios = [
    {id:1, name:"Rodri" , mail:"rara@gmail"}
]

const manejoDeArchivos = async ()=>{
    await fs.promises.writeFile('.promesas.json' , JSON.stringify(usuarios, null ,2) , 'utf-8') //converti un objeto en json ,null es para que no lo normalice y con 2 le da profundidad(mas bonito)
    .then(()=>console.log("Termine de escribir el archivo")).catch((err)=>console.log(err))

    // const agregado = fs.promises.appendFile('.promesas.json' , 'esto es un agregado' , 'utf-8')
    
    // console.log(agregado); //de esta manera lo agrega

    let lectura = await fs.promises.readFile('.promesas.json' , 'utf-8')
    let ObjetoParseado = JSON.parse(lectura) //lo parsee
    console.log(ObjetoParseado); //aca cree una variable y a la misma cree una lectura

    // let eliminar = await fs.promises.unlink('.promesas.json')
    // console.log("Texto eliminado"); //de esta manera borre el archivo

}
manejoDeArchivos()

