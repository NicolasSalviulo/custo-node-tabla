const { crearArchivoTabla } = require('./helpers/multiplicar')
const argv = require('./config/yargs').argv;
const colors = require('colors');

console.clear();

console.log( process.argv);  
console.log(argv);

//const[,,argumento = 'base=5'] = process.argv;
//const [, base = 5] = argumento.split('=');
//console.log(base);

crearArchivoTabla(argv.b, argv.l, argv.d, argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow, 'cread'))
.catch(err => console.log(err));





