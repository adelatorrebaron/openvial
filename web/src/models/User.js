import JwtDecode from 'jwt-decode'

export default class User {
  static from (token) {
    try {
      let obj = JwtDecode(token)
      //console.log(obj);
      return new User(obj)
    } catch (_) {
      return null
    }
  }


  constructor ({ id, username, email, fecha_creacion }) {
    this.id = id // eslint-disable-line camelcase
    this.email = email
    this.username = username
    this.fecha_creacion = fecha_creacion
  }

  /*
  constructor ({ usuarioId, admin, email, username, fecha_creacion }) {
    this.id = usuarioId // eslint-disable-line camelcase
    this.admin = admin
    this.email = email
    this.username = username
    this.fecha_creacion = fecha_creacion
  }

  get isAdmin () {
    return this.admin
  }
*/
}