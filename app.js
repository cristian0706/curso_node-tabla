const { crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();


crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));


//const [ , , arg3 = 'base=5' ] = process.argv;
//const [ , base = 5 ] = arg3.split('=');

//const base = 7;

//console.log(process.argv);
//console.log(argv);
//console.log('base: yargs', argv.b);