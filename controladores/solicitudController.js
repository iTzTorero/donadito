const SolicitudRepository = require('../repositorios/solicitudRepository.js');
const solicitudModelo = require('../modelo/solicitud.js');

const solicitudRepository = new SolicitudRepository();

class solicitudController {
    async find(req, res){
        const id = req.query.id;
        
        console.log(id);
        if(id > 0){
            const solicitud = await solicitudRepository.findOneById(id);
            if(!solicitud){
                res.json({message: 'Not found'}, 404);
                return;
            }

            return res.json(solicitud);
            
        }
        const solicitudes = await solicitudRepository.findAll();
        return res.json(solicitudes);
    }

    async add(req, res) {
        const solicitud = new solicitudModelo();
        solicitud.idsolicitud = 0;
        solicitud.iddonador = req.body.iddonador;
        solicitud.idorganismo = req.body.idorganismo;
        solicitud.descripcion = req.body.descripcion;

        await solicitudRepository.add(solicitud);

        const json =  solicitud.toJSON();
        res.json(json);
    }

    async update(req, res) {
        const { id } = req.query.id;

        const solicitud = await solicitudRepository.findOneById(id);
        if(!solicitud){
            res.json({message: 'Not found'}, 404);
            return;
        }
        solicitud.idsolicitud = 0;
        solicitud.iddonador = req.body.iddonador;
        solicitud.idorganismo = req.body.idorganismo;
        solicitud.descripcion = req.body.descripcion;

        await solicitudRepository.update(solicitud);

        const json =  solicitud.toJSON();
        res.json(json);
    }

    async delete(req, res) {
        const { id } = req.query.id;

        const solicitud = await solicitudRepository.findOneById(id);
        if(!solicitud){
            res.json({message : 'Not found'}, 404);
            return;
        }

        await solicitudRepository.delete(pedido);

        res.json({deleted: true}, 200);
    }
}
module.exports = solicitudController;