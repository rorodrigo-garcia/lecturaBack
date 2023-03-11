const { UserManager } = require("./userManager");



const usuario = new UserManager ()
usuario.crearUsuario ({
    nombre:"rodri",
    pass: '123456789'

})
console.log(usuario.consultarUsuario()
.then(res => console.log(res)));
 //si no llega a devolver la funcion es porque esta mal puesta la funcion,esta tiene que estar dentro de la clase