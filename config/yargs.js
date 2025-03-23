
const argv = require('yargs')
                        .option('b', {
                            alias: 'base',
                            type: 'number',
                            demandOption: true,
                            describe: 'Es la base de la tabla de multiplicar'
                        })
                        .check((argv, options) => {
                            if(isNaN(argv.b)){
                                throw 'La base tiene que ser un número'
                            }
                            return true;
                        })
                        .option('l',{
                           alias: 'listar',
                           type: 'boolean',
                           demandOption: false,
                           describe: 'Muestra la tabla en consola'
                        })
                        .option('h',{
                            alias: 'hasta',
                            type: 'number',
                            demandOption: false,
                            default: 10,
                            describe: 'Hasta que número se multiplicará la base'
                        })
                        .check((argv, options) => {
                            if(isNaN(argv.h)){
                                throw 'Hasta tiene que ser un número'
                            }
                            return true;
                        })
                        .option('d',{
                            alias: 'desde',
                            type: 'number',
                            demandOption: false,
                            default: 1,
                            describe: 'Desde que número se multiplicará la base'
                        })
                        .check((argv, options) => {
                            if(isNaN(argv.d)){
                                throw 'Desde tiene que ser un número'
                            }
                            return true;
                        })
                        .argv;

module.exports = { argv };