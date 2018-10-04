

const SET_ALUMNOS = (state, alumnos) => {
      state.alumnos = alumnos
}

const UNSET_ALUMNOS = (state) => {
      state.alumnos = null
}


const SET_ALUMNO = (state, alumno) => {
      state.alumno = alumno
}

const UNSET_ALUMNO = (state) => {
      state.alumno = null
}


export default {
      SET_ALUMNOS,
      UNSET_ALUMNOS,
      SET_ALUMNO,
      UNSET_ALUMNO
}