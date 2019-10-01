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

const crear = (descripcion) => {

    chargeDB();

    let todo = {
        descripcion,
        completado: false
    };

    todolist.push(todo);
    saveDB();

    return todo;
};

const getList = () => {
    chargeDB();
    try {
        todolist = require('../db/data.json');
    } catch (err) {
        todolist = []
    }

    return todolist;
};

const update = (descripcion, completado = true) => {
    chargeDB();

    let index = todolist.findIndex(task => {
        return task.descripcion === descripcion;
    })

    if(index >= 0){
        todolist[index].completado = completado;
        saveDB();
        return true;
    }else{
        return false;
    }
};

const delete_ = (descripcion) => {
    chargeDB();

    let newList = todolist.filter((task)=>{
        return task.descripcion !== descripcion;
    }); 

    if(newList.length === todolist.length){
        
        return false;
    }else {
        todolist = newList;
        saveDB();
        return true;
    }
}

module.exports = {
    crear,
    getList,
    update,
    delete_
}