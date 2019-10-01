const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca la tarea como completada o pendiente'
}

const crt = {descripcion}

const upd = {descripcion,completado}

const del = {descripcion}

const argv = require('yargs')
                .command('crear', 'Crea una tarea TO DO',crt)
                .command('actualizar','Actualiza estado de una tarea',upd)
                .command('borrar','Tarea borrada',del)
                .help()
                .argv

module.exports = {
    argv
}