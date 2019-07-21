const { crearArchivo, listarTabla } = require('./multiplicar/calculo');
const { argv } = require('./config/yargs');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limit)
            .then(message => console.log(message))
            .catch(err => console.log(err));
        break;

    case 'listar':
        console.log('listar archivo');
        listarTabla(argv.base, argv.limit)
            .then(resp => console.log(resp))
            .catch(err => console.log(err));
        break;

    default:
        console.log('no se reconoce el comando');
}


/*crearArchivo('base')
    .then(message => console.log(message))
    .catch(err => console.log(err));*/