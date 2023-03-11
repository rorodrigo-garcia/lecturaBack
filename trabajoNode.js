

const numeros ={}
for (let i =1 ; i <= 10000 ; i++){
    const random = Math.floor (Math.random() *20) +1  //math floor ,lo que hace es redonde para abajo y math ceil redondea para arriba 
    numeros[random] = numeros[random] ? numeros[random]+1 :1
}
console.log(numeros);