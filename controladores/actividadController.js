const ActividadRepository = require('../repositorios/actividadRepository.js');
const actividadModelo = require('../modelo/actividad.js');

const actividadRepository = new ActividadRepository();

class actividadController {
    async find(req, res){
        const id = req.query.id;
        
        console.log(id);
        if(id > 0){
            const actividad = await actividadRepository.findOneById(id);
            if(!actividad){
                res.json({message: 'Not found'}, 404);
                return;
            }

            return res.json(actividad);
            
        }
        const actividad = await actividadRepository.findAll();
        return res.json(actividad);
    }

    async add(req, res) {
        const actividad = new actividadModelo();
        actividad.idactividad = 0;
        actividad.idsolicitud = req.body.idsolicitud;
        actividad.estado = req.body.estado;
        actividad.detalle = req.body.detalle;

        await actividadRepository.add(actividad);

        const json =  actividad.toJSON();
        res.json(json);
    }

    async update(req, res) {
        const { id } = req.query.id;

        const actividad = await actividadRepository.findOneById(id);
        if(!actividad){
            res.json({message: 'Not found'}, 404);
            return;
        }
        actividad.estado = req.body.estado;
        actividad.detalle = req.body.detalle;

        await actividadRepository.update(actividad);

        const json =  actividad.toJSON();
        res.json(json);
    }

    async delete(req, res) {
        const { id } = req.query.id;

        const actividad = await actividadRepository.findOneById(id);
        if(!actividad){
            res.json({message : 'Not found'}, 404);
            return;
        }

        await actividadRepository.delete(actividad);

        res.json({deleted: true}, 200);
    }
}
module.exports = actividadController;