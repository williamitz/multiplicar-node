const fs = require('fs');

let crearArchivo = async(base, limit) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor base no es un número');
        }

        let data = '';

        for (let index = 1; index <= limit; index++) {
            data += `${index} * ${ base } = ${ index * base }\n`;
        }

        fs.writeFile(`files/tabla-${ base }.txt`, data, (err) => {
            if (err) {
                reject(err);
            }

            resolve(`Se creo el archivo tabla-${ base } con éxito`);
        });
    })
};

let listarTabla = async(base, limit) => {

    if (!Number(base) | !Number(limit)) {
        throw new Error('Error con los argumentos');
    }

    let str = '';
    for (let i = 1; i <= limit; i++) {
        str += `${ i } * ${ base } = ${ i * base }\n`;
    }

    return str;
}

module.exports = {
    crearArchivo,
    listarTabla
};