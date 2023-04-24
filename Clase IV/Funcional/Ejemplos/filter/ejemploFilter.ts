import IAlumnoModificado from "../../Interfaces/IAlumnoModificado";
import alumnosModificados from "../map/conMap";

let alumnosModificadosAprobados: readonly IAlumnoModificado[] = alumnosModificados.filter( (alumno: IAlumnoModificado) => alumno.aprobado);

console.log(alumnosModificadosAprobados);
