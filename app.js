//const fs = require('fs');//proyectos propios de node
//const fs = require('express'); //paquetes no nativos de node los hicieron otras personas
//const fs = require('./fs');//archivos propios
const argv = require ('./config/yargs').argv;
const colors = require ('colors');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
let comando = argv._[0]; // el ._ hace referencia al arreglo

switch(comando){

	case 'listar':
		console.log('Listar');
		listarTabla(argv.base, argv.limite);
	break;

	case 'crear':
		console.log('Crear');
		crearArchivo(argv.base, argv.limite) 
			.then(archivo => console.log(`Archivo creado: ${archivo.green}`))
			.catch(e => console.log(e));

	break;

	default:
		console.log('Comando no reconocido');
}


//console.log(process.argv);
//let argv2 = process.argv;
//console.log(argv.base);  //yargs
//console.log(argv.limite);  //yargs
//console.log(argv2); //se recibe de los procesos

//let parametro = argv[2];
//let base = parametro.split('=')[1]
//console.log(parametro);
