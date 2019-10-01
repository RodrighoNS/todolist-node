const crt = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}

const upd = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca la tarea como completada o pendiente'
    }
}

const del = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: ''
    }
}

const argv = require('yargs')
                .command('crear', 'Crea una tarea TO DO',crt)
                .command('actualizar','Actualiza estado de una tarea',upd)
                .command('borrar','Tarea borrada',del)
                .help()
                .argv

module.exports = {
    argv
}