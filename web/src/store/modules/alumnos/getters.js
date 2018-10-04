
// Devuelve los alumnos del State
const getAlumnos = (state) => {
      return state.alumnos
}

// Devuelve un boolean indicando si existen alumnos
const existAlumnos = (state) => {
    if (state.alumnos === null)
        return false;
    else
        return true;
}

// Devuelve el alumno activo del State
const getAlumno = (state) => {
    return state.alumno
}

// Devuelve un boolean indicando si esta cargado el alumno activo
const existAlumno = (state) => {
  if (state.alumno === null)
      return false;
  else
      return true;
}

export default {
    getAlumnos,
    existAlumnos,
    getAlumno,
}