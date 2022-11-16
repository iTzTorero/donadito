const { DataTypes } = require("sequelize");
const { sequelize } = require("./conexion");

const actividad = sequelize.define("solicitud",{
    idsolicitud:{
        type: DataTypes.INTEGER,
        primaryKey : true
    },
    iddonador : { type: DataTypes.INTEGER},
    idorganismo : { type: DataTypes.INTEGER},
    descripcion : { type: DataTypes.STRING},
},{
    tableName: 'solicitud',
    createdAt: false,
    updatedAt: false
});

module.exports = solicitud