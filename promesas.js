const task = new Promise((res , rej) =>{
    //aca van acciones
    res('todo good')
    //rej('todo mal')
})
task
 .then(respuestaRes=>{  //si la promesa se cumple,aca tambien podria adoptar la devolucion del rej,pero este como segundo parametro
    throw new Error('simulacion')
    console.log(respuestaRes);
 }, err => console.log(err)) //aca se captura el rej,en conjunto con el throw new error
 .catch(err => console.log(err))  //aveces el catch puede capturar el rechazado ,generalmente se usa sin el segundo parametro

 //ejemplo 
 const dividir =(dividendo , divisor)=>{
    return new Promise ((res,rej ) =>{
        if (divisor === 0) {
            rej ({msg: 'no puedo dividor por 0'})  //si es rechazado vendria aca
        }else{
            res(dividendo/divisor)  //si no,aca
        }
    })
 }
 dividir( 9,3 ).then(respuesta =>{ //aca se almacena pero no hace nada,este lo puede modificar
    return respuesta *3 //lo que hace fue multiplicarlo por 3
 }) 
 .catch(err => console.log(err)) 
 .then(res=> console.log(res))// y aca lo definiria
 .finally(()=> console.log('se ejecuta siempre por si las dudas')) //no es lo mas necesario

 const funcionAsync= async () =>{
    try {
        let res = await dividir(10,5)
   console.log(res); 
    } catch (error) {
        console.log(error);
    }
   
 }
 //tambien  la puedo definir async function funcionAsync(){}
 funcionAsync()
 console.log(funcionAsync);