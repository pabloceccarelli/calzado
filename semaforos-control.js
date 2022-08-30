import { Modelo, Op } from "./model";

let color
//reproceso
if(op.defectos_rep.length() < mod.lim_rep_inf){
    color = "background-color:green"
}
else{
    color = "background-color:yellow"
}
if(op.defectos_rep.length() >= mod.lim_rep_sup){
    color = "background-color:red"
}