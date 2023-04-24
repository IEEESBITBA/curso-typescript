import IAlumno from "../Interfaces/IAlumno";

const juan: IAlumno = {id: 1, nombre: 'Juan', notaCursada: 7},
    pedro: IAlumno = {id: 2, nombre: 'Pedro', notaCursada: 5},
    ariel: IAlumno = {id: 3, nombre: 'Ariel', notaCursada: 6},
    micaela: IAlumno = {id: 4, nombre: 'Micaela', notaCursada: 8},
    martina: IAlumno = {id: 5, nombre: 'Martina', notaCursada: 3},
    camila: IAlumno = {id: 6, nombre: 'Camila', notaCursada: 9},
    diana: IAlumno = {id: 7, nombre: 'Diana', notaCursada: 7};



const alumnos: readonly IAlumno[] = [juan, pedro, ariel, micaela, martina, camila, diana];

export default alumnos;
