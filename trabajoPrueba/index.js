import ManagerUsuarios from "./manager";

const manager = new ManagerUsuarios()
const env = async()=>{
    let primeraConsultaUsuarios = await manager.consultarUsuarios()
    let user = {
        nombre: "rodrigo",
        apellido: "Garcia",
        edad: 26,
        curso: "Backend"
    }
    let result = await manager.crearUsuario(user)
    let segundaConsultaUsuarios = await manager.consultarUsuarios()
}
env()