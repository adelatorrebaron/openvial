/*let DB_URI = "mongodb://localhost:27017/openvial";

if (process.env.MONGO_DB_URI) {
  DB_URI = process.env.MONGO_DB_URI;
}
*/
module.exports = {
    PORT: process.env.PORT || 3000,
    DB_URI: process.env.MONGO_DB_URI || "mongodb://localhost:27017/openvial",
    JWT_KEY: 'clave secreta jwt',
    JWT_EXPIRES_TIME: '2h'
}