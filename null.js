let variablePrueba = false //si tuviera un 0 el primero lo toma como false y el segundo como valor

let prueba1 = variablePrueba || 'sin valor' //cuando el valor es false me envia sin valor,ahora si tendria algun valor se pondria ese valor
console.log(prueba1);
let prueba2 = variablePrueba ?? 'cos valor' //en este caso me deuvelve el valor
console.log(prueba2);

class Persona {
    #fullname //siempre declararla antes 
    constructor(name,lastName) {
        this.lastName = lastName
        this.name = name
        
        this.#fullname = `${this.name} ${this.lastName} ` 
}

    getName (){
        return this.name
    }
    getFullName(){
        return this.#fullname
    }
    #metodoPrivado = ()=> ' Prueba '
} 
const persona = new Persona('Rodri' , 'garcia')
console.log(persona.getFullName());
//lo que pasa aca es que se puede acceder a la variable privada siempre y cuando este dentro,si esta fuera no 

