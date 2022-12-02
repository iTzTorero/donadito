const { DataTypes } = require("sequelize");
const { sequelize } = require("./conexion");

const actividad = sequelize.define("actividad",{
    idactividad:{
        type: DataTypes.INTEGER,
        primaryKey : true
    },
    idsolicitud: { type: DataTypes.INTEGER},
    nombreDonador : { type: DataTypes.STRING},
    estado : { type: DataTypes.STRING},
    detalle : { type: DataTypes.STRING},
    telefono : { type: DataTypes.STRING},
    correo : { type: DataTypes.STRING},
    direccion : { type: DataTypes.STRING},
},{
    tableName: 'actividad',
    createdAt: false,
    updatedAt: false
});

module.exports = actividad