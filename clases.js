/* --------------------CLASES--------------------- */

class Administrativo{
    constructor(legajo,dni,nombre){
        this.legajo = legajo
        this.dni = dni
        this.nombre = nombre
    }
}

class Color{
    constructor(codigo,descripcion){
        this.codigo = codigo
        this.descripcion = descripcion
    }

}

class Defecto{
    constructor(descripcion){
        this.descripcion = descripcion
    }
}

class Incidencia{
    constructor(horafecha){
        this.horafecha = horafecha
    }
}

class Jornada{
    constructor(fechainicio, fechafin){
        this.fechainicio = fechainicio
        this.fechafin = fechafin
    }
}

class Linea{
    constructor(numero){
        this.numero = numero
    }
}

class Modelo{
    constructor(sku,denominacion,inf_rep,sup_rep,inf_obs,sup_obs){
        this.sku = sku
        this.denominacion = denominacion
        this.inf_rep = inf_rep
        this.sup_rep = sup_rep
        this.inf_obs = inf_obs
        this.sup_obs = sup_obs
    }
}

class Op{
    constructor(n_op, fecha1_op,fecha2_op){
        this.n_op = n_op
        this.fecha1_op = fecha1.op
        this.fecha2_op = fecha2_op
    }
}


class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido= apellido
    }
}

class Semaforo{
    constructor(fechalimite, fechareinicio){
        this.fechalimite = fechalimite
        this.fechareinicio = fechareinicio
    }
}

class SupCal{
    constructor(legajo,dni,nombre){
        this.legajo = legajo
        this.dni = dni
        this.nombre = nombre
    }
}

class SupLin{
    constructor(legajo,dni,nombre){
        this.legajo = legajo
        this.dni = dni
        this.nombre = nombre
    }
}

class Turno{
    constructor(fechainicio, fechafin){
        this.fechainicio = fechainicio
        this.fechafin = fechafin
    }
}

/* --------------------ENUMERACIONES--------------------- */
/* --------------------ENUMERACIONES--------------------- */
/* --------------------ENUMERACIONES--------------------- */
/* --------------------ENUMERACIONES--------------------- */

class Estado{
    static activada = new Estado("ACTIVADA")
    static pausada = new Estado("PAUSADA")
    static finalizada = new Estado("FINALIZADA")

    constructor(name){
        this.name = name

    }
}

class Pie{
    static derecho = new Pie("DERECHO")
    static izquierdo = new Pie("IZQUIERDO")

    constructor(name){
        this.name = name
    }
}

class TipoIncidencia{
    static primera = new TipoIncidencia("PRIMERA")
    static defecto = new TipoIncidencia("DEFECTO")
    constructor(name){
        this.name = name
    }
}

class TipoSemaforo{
    static observado = new TipoSemaforo("OBSERVADO")
    static reproceso = new TipoSemaforo("REPROCESO")

    constructor(name){
        this.name = name
    }
}


/* --------------------CODIGO--------------------- */

const coleccion_modelos = []

const user = new Persona('Pablo','Ceccarelli')
const user1 = new Persona('Anto','Albornoz')
const user2 = new Persona('Lucas','Figueroa')
const user3 = new Persona('Paki','Figuerosa')
let personas = [user,user1,user2,user3]

personas.forEach(function(Persona,i,array){
    console.log(Persona,i)
})



const zap1 = new Modelo ('ABC_321', 'NIKE ZOOM', 3, 5, 7, 9)
const zap2 = new Modelo ('ABC_DEF', 'ADIDAS XLR', 3, 5, 7, 9)
const zap3 = new Modelo ('ZXC_432', 'TOPPER CUERO', 3, 5, 7, 10)

let modelos = [zap1,zap2,zap3]

modelos.forEach(function(Modelo,i,array){
    console.log(Modelo,i)
})





let estado = Estado.activada
console.log(estado)


console.log(document)
/* document.querySelector('h1').textContent = 'HOLA A TODOS' */
console.log(document.querySelector("#tablita"))


const row_tablita = document.getElementById("rowTablita")

// const arrayElement = ['J356J4R','REBOOK STYLE',4,5,6,7]

/* //primera manera de insertar

arrayElement.forEach(item => {
    console.log(item)
    const td_col = document.createElement('td')
    td_col.textContent = item
    row_tablita.appendChild(td_col)
})



//segunda manera de insertar (sacando el for)

for (i=0;i<10;i++){
    const body_tablita = document.getElementById("bodyTablita")
    const row_new = document.createElement('tr')
    body_tablita.appendChild(row_new)

    arrayElement.forEach(item => {

        row_new.innerHTML += `<td>${item}</td>`

    })


} */

// tercera forma de insertar (con fragment)

/* for (i=0;i<10;i++){
    
    const body_tablita = document.getElementById("bodyTablita")
    const row_new = document.createElement('tr')
    body_tablita.appendChild(row_new)
    const fragment = document.createDocumentFragment()
    //segunda forma de crear frag
    //const fragment2 = new DocumentFragment() 
    

arrayElement.forEach(item => {
    const td_col = document.createElement('td')
    td_col.textContent = item
    fragment.appendChild(td_col)
})
row_new.appendChild(fragment)

}
 */

//forma OK para insertar (template)

/* const template = document.querySelector('#template-td').content
const fragment3 = document.createDocumentFragment()


arrayElement.forEach(item => {

    template.querySelector('#columna').textContent = item
    const clon = template.cloneNode(true)
    fragment3.appendChild(clon)

})
row_tablita.appendChild(fragment3) */



const btnAñadir = document.querySelector('.btn-outline-success')
btnAñadir.addEventListener('click', () =>{


    const sku = document.querySelector('.sku').value
    const denominacion = document.querySelector('.deno').value
    const lim_inf_rep = document.querySelector('.lim_inf_rep').value
    const lim_sup_rep = document.querySelector('.lim_sup_rep').value
    const lim_inf_obs = document.querySelector('.lim_inf_obs').value
    const lim_sup_obs = document.querySelector('.lim_sup_obs').value

    if(denominacion !== "" || lim_inf_rep !== "" || lim_sup_rep !== "" || lim_inf_obs!=="" || lim_sup_obs !== ""){

        const zapa_json = new Modelo (sku,denominacion,lim_inf_rep,lim_sup_rep,lim_inf_obs,lim_sup_obs)
        
        coleccion_modelos.push(zapa_json)

        console.log(zapa_json);
        añadirfila (zapa_json)
        limpiar();


    }else{
        alert("No ingresó todos los campos correspondientes!")
    }


})

function añadirfila(zapa_json){

    const arrayElement = 
    [zapa_json.sku,
    zapa_json.denominacion,
    zapa_json.inf_rep,
    zapa_json.sup_rep,
    zapa_json.inf_obs,
    zapa_json.sup_obs]


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

}

function limpiar (){
    document.querySelector('.sku').value=""
    document.querySelector('.deno').value=""
    document.querySelector('.lim_inf_rep').value=""
    document.querySelector('.lim_sup_rep').value=""
    document.querySelector('.lim_inf_obs').value=""
    document.querySelector('.lim_sup_obs').value=""

}