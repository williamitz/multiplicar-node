const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 12
    }
};
const argv = require('yargs')
    .command('listar', 'Programa para listar tablas de multiplicar', opts)
    .command('crear', 'Programa para crear tablas de multiplicar', opts)
    .help()
    .argv

module.exports = {
    argv
};