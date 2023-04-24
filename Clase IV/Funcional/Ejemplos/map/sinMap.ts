import IAlumno from "../../Interfaces/IAlumno";
import alumnos from "../../Datos/alumnos";
import IAlumnoModificado from "../../Interfaces/IAlumnoModificado";

let alumnosModificadosDificil: IAlumnoModificado[] = [];
for( let alumno of alumnos ) {
    alumnosModificadosDificil.push({ ...alumno, ...{aprobado: alumno.notaCursada > 6}});
}
let alumnosModificadosDificilSoloLectura: readonly  IAlumnoModificado[] = alumnosModificadosDificil;


console.log(alumnosModificadosDificilSoloLectura);
