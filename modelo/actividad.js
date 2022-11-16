const { DataTypes } = require("sequelize");
const { sequelize } = require("./conexion");

const actividad = sequelize.define("actividad",{
    idactividad:{
        type: DataTypes.INTEGER,
        primaryKey : true
    },
    idsolicitud: { type: DataTypes.INTEGER},
    estado : { type: DataTypes.STRING},
    detalle : { type: DataTypes.STRING},
},{
    tableName: 'actividad',
    createdAt: false,
    updatedAt: false
});

module.exports = actividad