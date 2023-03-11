const objetoss = [
    {
        manzanas:3,
        peras:2,
        carne:1,
        jugos:5,
        dulces:2
    },
    {
        manzanas:1,
        sandias:1,
        huevos:6,
        jugos:1,
        panes:5
    }
];
//realizar un array nuevo que contenga los productos,no cantidades utilizando object.keys y array.includes ,mostrar array en consola
//obtener el total de productos vendidos por todos los objetos,usando object.values

const objetos = {...objetoss[0] , ... objetoss[1]}
const productosTotales = Object.keys(objetos)
console.log(productosTotales); //aca utilizamos la destucturacion 
const valores = Object.values(objetoss[0]).concat(Object.values(objetoss[1]))
const total = valores.reduce((a,b) => a + b ,0)
console.log(total ); //asi podriamos hacer la suma con un reduce 
const array1 = [1,2,3,4]
const inicial = 0
const totales = array1.reduce((count , e)=>count + e , inicial)
console.log(totales);

