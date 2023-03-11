const suma = (num1 , num2)=>{
    return new Promise((res,rej)=>{
        if(num1 === 0 || num2 ===0)rej('Operacion innecesaria')
        if(num1 + num2 < 0)rej('La calcula solo debe devolver valores positivos')
        res(num1+num2)
    })
}
const resta = (num1 , num2)=>{
    return new Promise((res,rej)=>{
        if(num1 ===0  || num2 ===0 )rej('No')
        if(num1 - num2 <0 ) rej('No')
        res (num1 - num2)
    })
}
const mult = (num1 , num2) =>{
    return new Promise ((res,rej)=>{
        if(num1 < 0 || num2 <0)rej ('No')
        res (num1*num2)
    })
}
const div =(num1 , num2) =>{
    return new Promise((res,rej)=>{
        if(num2 === 0)rej('NO')
        res(num1 % num2)
    })
}
const calculos = async()=>{
    try {
        let num1 = 5
        let num2 = 2
        let resultadoSuma = await suma(num1,num2)  
        console.log(resultadoSuma);      
        let resultadoResta = await resta(num1,num2)
        console.log(resultadoResta);
        let resultadoMult = await mult (num1,num2)
        console.log(resultadoMult);
        let resueltoDiv = await div (num1,num2)
        console.log(resueltoDiv)
    } catch (error) {
        console.log(error);
    }
}
calculos()