const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base, listar, hasta) => {
  try {
    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
      let resultado = base * i;
      salida += `${base} x ${i} = ${resultado}\n`;
      consola += `${base} ${'x'.red} ${i} ${'='.red} ${resultado}\n`;
    }

    if (listar) {
      console.log('===================='.yellow);
      console.log('    Tabla del: ', colors.cyan(base));
      console.log('====================\n'.yellow);

      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
