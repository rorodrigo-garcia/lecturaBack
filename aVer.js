const impuestos ={
    impuesto1: 26,
    impuesto2: 30,
    impuesto3: 25
} 
let valoresDeimpuestos = Object.entries(impuestos)
console.log(valoresDeimpuestos);

let SoloCampos = Object.keys(impuestos) 
console.log(SoloCampos); //El nombre de la propiedad

let SoloValores = Object.values(impuestos)
console.log(SoloValores); //valores de las propiedades
