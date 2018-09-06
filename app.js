const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


// console.log(multiplicar);

// console.log(process.argv);
let argv2 = process.argv;
// console.log('limite', argv.base);

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado : ${ archivo}`))
            .catch(e => console.log(e));

        break;

    default:
        console.log('no reconocido');
        break;
}
// let parametro = argv[2];
// let base = parametro.split('=')[1]
//let base = parametro.split('=')[1]