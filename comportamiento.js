let arrayTareas=[];
let ultimo = 0;

let agregarItem= (titulo) => {
    let tarea = {
        id: ultimo,
        titulo: titulo,
        estado: false
    }
    arrayTareas.push(tarea)
    document.getElementById("lista").innerHTML+=`<li><input type="checkbox" id="${ultimo}" onclick=Marcar(id)><h10 style="align-items:left"> ${titulo} </h10 ></li>`
    ultimo++;
    document.getElementById(`tarea`).value="";
}

let Marcar = (id)=>{
    arrayTareas[id].estado=true;
    reiniciarLista();
}

let reiniciarLista = () => {
    document.getElementById("lista").innerHTML= ""
    for(let i = 0; i<arrayTareas.length; i++){
        if(arrayTareas[i].estado==true){
            document.getElementById("lista").innerHTML+=`<li><input type="checkbox" checked disabled="disabled" id="${arrayTareas[i].id}" onclick=Marcar(id)><h10 style="color:grey;align-items:center"> ${arrayTareas[i].titulo} </h10></li>`
        }else{
            document.getElementById("lista").innerHTML+=`<li><input type="checkbox" id="${arrayTareas[i].id}" onclick=Marcar(id)><h10 style="align-items:center"> ${arrayTareas[i].titulo} </h10></li>`
        }
    }
}