const modelo = require('../modelo/actividad.js');

class actividadRepository{
    async findAll(){
        const actividad = await actividad.findAll();
        return actividad;
    }

    async findOneById(idactividad){
        const actividad = await actividad.findOne({
            where: {idactividad: idactividad}
        });

        return actividad;
    }

    async add(actividad){
        actividad.idactividad = 0;
        return( await actividad.save());
    }

    async update(actividad){
        if(actividad.idactividad <= 0)
            throw new Error('Expecting user to have a valid id');

        return (await actividad.save());
        
    }

    async delete(actividad){
        return (await actividad.destroy());
    }


}

module.exports = actividadRepository;