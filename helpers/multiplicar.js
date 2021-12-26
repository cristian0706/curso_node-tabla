const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base  = 5, listar = false, hasta = 10) => {

    try {
        let salida = '';

        for( let i = 1; i<= hasta; i++){
            salida += `${base} x ${i} = ${base * i} \n`;
        }

        if(listar){
            console.log('=======================================');
            console.log(colors.underline.red('      Tabla del:', base));
            console.log('=======================================');
            console.log(salida.green);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`;  
    } catch (error) {
        throw error;
    }
           
     
    
}

module.exports = {
    crearArchivo
}












/* const crearArchivo = (base  = 5) => {
    let salida = '';
    const numero = 10;

    for( let i = 1; i<= numero; i++){
        salida += `${base} x ${i} = ${base * i} \n`;
    }

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    console.log(`tabla-${base}.txt creado`);
} */

/* const crearArchivo = (base  = 5) => {
     return new Promise(  (resolve, reject) => {
        const numero = 10;
        let salida = '';

        for( let i = 1; i<= numero; i++){
            salida += `${base} x ${i} = ${base * i} \n`;
        }

        (salida) 
            ? resolve(fs.writeFileSync(`tabla-${base}.txt`, salida))
            : reject(`El archivo tabla-${base} no ha sido creado`);
        
        console.log(salida);
     })
} */

