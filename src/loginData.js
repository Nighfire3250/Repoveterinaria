/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { rol } from "views/LoginPage/LoginPage";

export let rolActual;
export function rolPrincipio ()  {
    rolActual = "";
    console.log(rolActual);
}

export function asignarRol (){
    rolActual = "Administrador";
    console.log(rolActual);
}

export function quitarRol () {
    rolActual = "";
    console.log(rolActual);
}
