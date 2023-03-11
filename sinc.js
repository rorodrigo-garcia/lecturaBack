console.log("tarea 1 ");
console.log("tarea 2");
console.log("tarea 3"); //esto es sincronico

//asincronico

const temporizador =(cb) =>{
    //ejecutara las acciones pasadas los 3 seg
    setTimeout(()=>{
        cb()
    }, 3000)  //el tiempo que tarda en ejecutarse 
}
 
let operacion =()=> console.log("Realizando operacion");
console.log("iniciando tareas");
temporizador(operacion)
console.log("finalizando tareas");

//setInterval
let contador = () =>{
    let counter = 1
    console.log("realizando operacion 2");
    let timer = setInterval(()=>{  //tiene 2 parentesis porque es un cb
        console.log(counter++);
        if(counter >5){
            clearInterval(timer) //esto sirve para darle fin al interval 
        }
    },1000)
}
console.log("tarea 1 ");
contador()
console.log("tarea 3 ");