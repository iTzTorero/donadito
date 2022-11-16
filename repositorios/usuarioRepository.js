const modelo = require('../modelo/usuario.js');

class usuarioRepository{
    async findAll(){
        const usuario = await usuario.findAll();
        return usuario;
    }

    async findOneById(idPedido){
        const usuario = await usuario.findOne({
            where: {idusuario: idusuario}
        });

        return usuario;
    }

    async add(usuario){
        usuario.idusuario = 0;
        return( await usuario.save());
    }

    async update(usuario){
        if(usuario.idusuario <= 0)
            throw new Error('Expecting user to have a valid id');

        return (await usuario.save());
        
    }

    async delete(usuario){
        return (await usuario.destroy());
    }


}

module.exports = usuarioRepository;