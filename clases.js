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

export default class Modelo{
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
