const fs = require('fs');
const colors = require('colors');

let todolist = [];

const saveDB = () => {
    let data = JSON.stringify(todolist);

    fs.writeFile('db/data.json',data, (err) => {
        if (err) throw new Error('No se pudo grabar',err);
        console.log('La data ha sido guardada!'); 
    });
}

const chargeDB = () => {
    try {
        todolist = require('../db/data.json');
    } catch (error) {
        todolist = [];
    }
}

const getList = () => {
    chargeDB();
    try {
        todolist = require('../db/data.json');
    } catch (err) {
        todolist = []
    }

    return todolist;
}

const crear = (descripcion) => {

    chargeDB();

    let todo = {
        descripcion,
        completado: false
    };

    todolist.push(todo);
    saveDB();

    return todo;
}

module.exports = {
    crear,
    getList
}