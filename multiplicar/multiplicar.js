const fs = require('fs');//proyectos propios de node
//const fs = require('express'); //paquetes no nativos de node los hicieron otras personas
//const fs = require('./fs');//archivos propios
const colors = require ('colors');

let listarTabla = (base, limite=10) => {

	console.log ('====================='.blue);
	console.log (`=====tabla de ${base}=====`.blue);
	console.log ('====================='.blue);
	for (let i= 1; i<=limite; i++){
			//console.log(`${base} * ${i} = ${base * i}`);
			
			console.log(`${base} * ${i} = ${base * i}`);
	}
			
}




let crearArchivo = (base, limite = 10) => {

	return new Promise ((resolve, reject)=> {

	if (!Number(base)){
		reject(`El valor introducido "${base}" no es un número`);
		return;
	}
	let data = '';
		for (let i= 1; i<=limite; i++){
			//console.log(`${base} * ${i} = ${base * i}`);
			data += `${base} * ${i} = ${base * i}\n`;
		}


		fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
  			if (err) 
  				reject (err)
 			else 
  				resolve(`tabla-${base}.txt`)
 				// console.log(`The file  has been saved!`);
		});

	});
}

module.exports = {
	crearArchivo,
	listarTabla
}
