const { DataTypes } = require("sequelize");
const { sequelize } = require("./conexion");

const solicitud = sequelize.define("solicitud",{
    idsolicitud:{
        type: DataTypes.INTEGER,
        primaryKey : true
    },
    nombreDonador : { type: DataTypes.STRING},
    nombreOrganismo : { type: DataTypes.STRING},
    direccion : { type: DataTypes.STRING},
    telefono : { type: DataTypes.STRING},
    correo : { type: DataTypes.STRING},
    detalle : { type: DataTypes.STRING},
},{
    tableName: 'solicitud',
    createdAt: false,
    updatedAt: false
});

module.exports = solicitud