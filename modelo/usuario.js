const { DataTypes } = require("sequelize");
const { sequelize } = require("./conexion");

const usuario = sequelize.define("usuario",{
    idusuario:{
        type: DataTypes.INTEGER,
        primaryKey : true
    },
    nombre : { type: DataTypes.STRING},
    password : { type: DataTypes.STRING},
    email : { type: DataTypes.STRING},
    direccion : { type: DataTypes.STRING},
    tipoUsuario : { type: DataTypes.STRING},
    telefono : { type: DataTypes.STRING}
 
},{
    tableName: 'usuario',
    createdAt: false,
    updatedAt: false
});

module.exports = usuario