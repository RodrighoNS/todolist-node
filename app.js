// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const todo_ = require('./to-do/to-do');
const colors = require('colors');

let comando = argv._[0];

switch(comando){
    case 'crear':
        let task = todo_.crear(argv.descripcion);
        console.log(task);
        break;
    case 'listar':
        console.log('Mostrar todas las tareas por hacer');
        let list = todo_.getList();
        for (let task of list){
            console.log('==TO DO=='.green);
            console.log(task.descripcion);
            console.log('Estado: ',task.completado);
            console.log('========='.blue);
        }
        break;
    case 'actualizar':
        console.log('Actualiza una tarea');
        let updt = todo_.update(argv.descripcion, argv.completado);
        console.log(updt);
        break;

    case 'borrar':
        let borrado = todo_.delete_(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');
}