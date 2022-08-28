import Modelo from './clases.js'

/* --------------------CODIGO--------------------- */

let coleccion_modelos = []
let buscado
let coleccion_modelos_ultima = []



if(localStorage.getItem("lista")==null){
    localStorage.setItem("lista",JSON.stringify(coleccion_modelos))
}

localStorage.setItem("lista",JSON.stringify(coleccion_modelos)) 

coleccion_modelos = JSON.parse(localStorage.getItem("lista"))
actualizar(coleccion_modelos)

/* let estado = Estado.activada
console.log(estado) */

const row_tablita = document.getElementById("rowTablita")

const btnAñadir = document.querySelector('.añadir')
const btnBuscar = document.querySelector('.buscar')
const btnEliminar = document.querySelector('.eliminar')
const btnLimpiar = document.querySelector('.limpiar')

btnAñadir.addEventListener('click',clickAñadir);
btnBuscar.addEventListener('click',clickbuscar);
btnEliminar.addEventListener('click',clickEliminar);
btnLimpiar.addEventListener('click',limpiar)

function clickAñadir(){
    
    const sku = document.querySelector('.sku').value
    const denominacion = document.querySelector('.deno').value
    const lim_inf_rep = document.querySelector('.lim_inf_rep').value
    const lim_sup_rep = document.querySelector('.lim_sup_rep').value
    const lim_inf_obs = document.querySelector('.lim_inf_obs').value
    const lim_sup_obs = document.querySelector('.lim_sup_obs').value

    if(denominacion !== "" || lim_inf_rep !== "" || lim_sup_rep !== "" || lim_inf_obs!=="" || lim_sup_obs !== ""){
        
        

        let zapa_json = new Modelo (sku,denominacion,lim_inf_rep,lim_sup_rep,lim_inf_obs,lim_sup_obs)
        coleccion_modelos = JSON.parse(localStorage.getItem("lista"))
        coleccion_modelos.push(zapa_json)

        localStorage.setItem("lista",JSON.stringify(coleccion_modelos))

        coleccion_modelos_ultima=JSON.parse(localStorage.getItem("lista"))

        //console.log(zapa_json)


        actualizar (coleccion_modelos_ultima)
        limpiar();


    }else{
        alert("No ingresó todos los campos correspondientes!")
    }


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

function limpiar (){
    document.querySelector('.sku').value=""
    document.querySelector('.deno').value=""
    document.querySelector('.lim_inf_rep').value=""
    document.querySelector('.lim_sup_rep').value=""
    document.querySelector('.lim_inf_obs').value=""
    document.querySelector('.lim_sup_obs').value=""

}

function clickbuscar(){

    
    const SKU = document.querySelector('.sku').value

    coleccion_modelos_ultima = JSON.parse(localStorage.getItem("lista"))

    coleccion_modelos_ultima.forEach(function(modelo){
        if(modelo.sku === SKU){

            buscado = modelo
            document.querySelector('.deno').value=buscado.denominacion
            document.querySelector('.lim_inf_rep').value=buscado.inf_rep
            document.querySelector('.lim_sup_rep').value=buscado.sup_rep
            document.querySelector('.lim_inf_obs').value=buscado.inf_obs
            document.querySelector('.lim_sup_obs').value=buscado.sup_obs

        }

    })

    if(buscado == null){
        alert("No se encontró")
    }

    
    



}

function clickEliminar(){

    if (buscado!=null){
        const modelos_aux = []

        coleccion_modelos_ultima = JSON.parse(localStorage.getItem("lista"))
    
        coleccion_modelos_ultima.forEach(function(modelo){
            if(modelo.sku !== buscado.sku){
    
                modelos_aux.push(modelo)
    
                
    
            }
    
        })
    
        localStorage.setItem("lista",JSON.stringify(modelos_aux))
    
        limpiar()
        actualizar(modelos_aux)

    }


}