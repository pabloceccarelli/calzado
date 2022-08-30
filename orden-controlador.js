import {Op} from './model.js'

const btnOrden = document.querySelector('.btnOrden')
const btnCrear = document.querySelector('.btnCrear')

btnOrden.addEventListener('click',obtenerOrden);
btnCrear.addEventListener('click',crearOrden);

let coleccion_op = []

let coleccion_modelos = []
let buscado
let coleccion_modelos_ultima = []

coleccion_modelos = JSON.parse(localStorage.getItem("lista"))
actualizar (coleccion_modelos)

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

function actualizar(coleccion_modelos_ultima){

    var node = document.getElementById("bodyTablita");
    while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
    }

    

    coleccion_modelos_ultima.forEach(function(modelo){
        console.log(modelo)
        const arrayElement = 
        [modelo.sku,
        modelo.denominacion,
        modelo.inf_rep,
        modelo.sup_rep,
        modelo.inf_obs,
        modelo.sup_obs]

        const template = document.querySelector('#template-td').content
        const fragment3 = document.createDocumentFragment()
        const body_tablita = document.getElementById("bodyTablita")
        const row_new = document.createElement('tr')

        body_tablita.appendChild(row_new)
    
    
        arrayElement.forEach(item => {
        
            template.querySelector('#columna').textContent = item
            const clon = template.cloneNode(true)
            fragment3.appendChild(clon)
        
        })
        row_new.appendChild(fragment3)


    })

/* 



 */

}