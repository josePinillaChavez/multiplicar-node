// Requireds
const fs = require('fs');
const colors = require('colors');
let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor introducido ${base } no es un numero`);
            return;
        }
        let data = '';
        for (let index = 1; index < limite; index++) {
            data += `${base} * ${index} = ${base*index} \n`;

        }
        fs.writeFile(`tablas/tabla ${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }.txt`)

        });
    });
}

let listarTabla = (base, limite) => {
    console.log('==========================================');
    console.log(`==========tabla de ${base}================`.yellow);
    console.log('==========================================');
    for (let index = 0; index < limite; index++) {

        console.log(`${ base }*${index} = ${base * index}`.red);

    }
}

module.exports = {
    crearArchivo,
    listarTabla
}