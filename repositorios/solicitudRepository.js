const modelo = require('../modelo/solicitud.js');

class solicitudRepository{
    async findAll(){
        const solicitud = await modelo.findAll();
        return solicitud;
    }

    async findOneById(idsolicitud){
        const solicitud = await modelo.findOne({
            where: {idsolicitud: idsolicitud}
        });

        return solicitud;
    }

    async add(solicitud){
        solicitud.idsolicitud = 0;
        return( await solicitud.save());
    }

    async update(solicitud){
        if(solicitud.idsolicitud <= 0)
            throw new Error('Expecting user to have a valid id');

        return (await solicitud.save());
        
    }

    async delete(solicitud){
        return (await solicitud.destroy());
    }


}

module.exports = solicitudRepository;