const UsuarioRepository = require('/Users/itztorero/Documents/Documents/VS/topicos/donadito/repositorios/usuarioRepository.js');
const usuarioModelo = require('../modelo/usuario.js');

const usuarioRepository = new UsuarioRepository();

class usuarioController {
    async find(req, res){
        const id = req.query.id;
        
        console.log(id);
        if(id > 0){
            const usuario = await usuarioRepository.findOneById(id);
            if(!usuario){
                res.json({message: 'Not found'}, 404);
                return;
            }

            return res.json(usuario);
            
        }
        const usuarios = await usuarioRepository.findAll();
        return res.json(usuarios);
    }

    async add(req, res) {
        const usuario = new usuarioModelo();
        usuario.idusuario = 0;
        usuario.nombre = req.body.nombre;
        usuario.password = req.body.password;
        usuario.email = req.body.email;
        usuario.direccion = req.body.direccion;
        usuario.tipoUsuario = req.body.tipoUsuario;
        usuario.telefono = req.body.telefono;

        await usuarioRepository.add(usuario);

        const json =  usuario.toJSON();
        res.json(json);
    }

    async update(req, res) {
        const { id } = req.query.id;

        const usuario = await usuarioRepository.findOneById(id);
        if(!usuario){
            res.json({message: 'Not found'}, 404);
            return;
        }
        usuario.idusuario = 0;
        usuario.nombre = req.body.nombre;
        usuario.password = req.body.password;
        usuario.email = req.body.email;
        usuario.direccion = req.body.direccion;
        usuario.tipoUsuario = req.body.tipoUsuario;
        usuario.telefono = req.body.telefono;

        await usuarioRepository.update(usuario);

        const json =  usuario.toJSON();
        res.json(json);
    }

    async delete(req, res) {
        const { id } = req.query.id;

        const usuario = await usuarioRepository.findOneById(id);
        if(!usuario){
            res.json({message : 'Not found'}, 404);
            return;
        }

        await usuarioRepository.delete(usuario);

        res.json({deleted: true}, 200);
    }
}
module.exports = usuarioController;