const fs = require("fs");
const crypto = require("crypto");


class UserManager {

    constructor(ruta){
        this.ruta = ruta
    }

    consultarUsuario = async ()=>{ //recomienda siempre leer el archivo , si o si es sincronico
       try {
        if (fs.existsSync(this.ruta)) {  //siempre ver el archivo antes
            const users = await fs.promises.readFile(this.ruta, 'utf-8') //de esta manera llevo a la lectura de la ruta
            return JSON.parse(users) //lo pasamos a parsear
        } else{
            return [] //Como vamos a guardar algo lo mejor es poner un else con un array vacio 
        }
        
       } catch (error) {
            return error
       }
      
    }
    crearUsuario= async (newUser)=>{  
       const users = await this.consultarUsuario()
       if (users.length === 0) { //pregunto si el array es = a 0
            newUser.id=1 //si no,agrega el 1
       } else {
            newUser.id = users[users.length-1].id+1 //si existe el usuario se posiciona en el ultimo objeto de ese array .lee la propiedad y le agrga un id
       }
       newUser.salt = crypto.randomBytes(128).toString('base64') //llamamos a cryto ,en randomByte para configurar y la base 64 es lo que codifica,genera una palabra secreta para la firma
       newUser.contraseña = crypto.createHmac('sha256', newUser.salt).update(newUser.pass).digest('hex') //de esta manera encriptamos la contraseña,sha256 es el tipo de codificacion ,y el -salt es para que haga todo,update es para guardar y se vuelve a poner una codificacion

       
    //    users.push(newUser)
       console.log(newUser);
    //    await fs.promises.writeFile(ruta,JSON.stringify(users,null , 2))
       return newUser
    }
    }

module.exports = {
    UserManager
}