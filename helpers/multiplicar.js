const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async (base = 5, listar = false, desde = 1, hasta = 10) => {
    
    try {
        console.log('==================================='.green)
        console.log(`======== Tabla del: ${ colors.blue(base) } ==========`)
        console.log('==================================='.green)

        let salida, consola = '';

        for(var i = desde; i <= hasta; i++){
            //console.log(`${BASE} X ${i} = ${BASE * i}`);
            salida  += (`${base} X ${i} = ${base * i}\n`)
            consola += (`${base} ${'X'.yellow} ${i} = ${base * i}\n`)
        }
    
        if(listar) console.log(consola);
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${ base }.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = { crearArchivoTabla };