import {Op} from './model.js'

const btnOrden = document.querySelector('.btnOrden')
const btnCrear = document.querySelector('.btnCrear')

btnOrden.addEventListener('click',obtenerOrden);
btnCrear.addEventListener('click',crearOrden);

let coleccion_op = []

function obtenerOrden(){
    
    let x = parseInt(Math.random()*1000000)
    console.log(x);
    document.querySelector('.ordenprod').value = x 
    console.log();
    
}

function crearOrden(){

    const n_op = document.querySelector('.ordenprod').value
    const fecha = document.querySelector('.fecha').value
    console.log(fecha);
    const hora = document.querySelector('.hora').value
    console.log(hora);

    if(n_op !== "" || fecha !== ""  || hora !== ""){
        
        let op = new Op(n_op,fecha,hora)
        //coleccion_op = JSON.parse(localStorage.getItem("lista_op"))
        //coleccion_op.add(op)
        //localStorage.setItem("lista_op",JSON.stringify(coleccion_op))

        limpiar();
        alert(`Se creó la orden ${n_op} con fecha: ${fecha} y hora: ${hora}`)


    }else{
        alert("No ingresó todos los campos correspondientes!")
    }
}

function limpiar (){
    document.querySelector('.ordenprod').value=""
    document.querySelector('.fecha').value=""
    document.querySelector('.hora').value=""

}