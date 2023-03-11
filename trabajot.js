const fs = require('fs');
const info = async () =>{ 
   


     let infoo = await fs.promises.readFile('./package.json' , 'utf-8')
     let objetoParseado = JSON.parse(infoo)
     console.log(objetoParseado);

     let creacion = await fs.promises.writeFile('./info.json' , JSON.stringify(objetoParseado,null,2) , 'utf-8')
     console.log(creacion);
}
info()