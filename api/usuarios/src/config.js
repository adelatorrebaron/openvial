module.exports = {
    PORT: process.env.PORT || 3001,
    DB_URI: process.env.MONGO_DB_URI || "mongodb://localhost:27017/openvial_usuarios",
    JWT_KEY: 'clave secreta jwt',
    JWT_EXPIRES_TIME: '2h'
}