const obj1 ={
    propiedad1 : '1',
    propiedad2: 'c',
    propiedad3: true
}
const obj2 ={
    propiedad1 : '2',
    propiedad2: 'd',
    propiedad4: 4
}
const { propiedad1} = obj1 //aca estoy haciendo un destructuring 
const obj3 = {...obj1 , ...obj2} //este es un nuevo objeto ,pero que copia todas sus propiedades 

console.log(obj3); //al tenes dos objetos de donde nosotros pegamos sus propiedades con el mismo nombre,se queda con el segundo 
//para tener en cuenta, esto siempre quedara cn el segundo objeto ,independientemente de si el segundo objeto es creado primero

//tambien podemos utilizar el metodo rest , lo que hace es que trabaja con el resto de las propiedades del mismo objeto 
const {propiedad2 , ...rest} = obj2
console.log(propiedad2);
console.log(rest);