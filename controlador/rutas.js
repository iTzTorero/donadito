const solicitudController = require('/Users/itztorero/Documents/Documents/VS/topicos/donadito/controladores/solicitudController.js');
const usuarioController = require('/Users/itztorero/Documents/Documents/VS/topicos/donadito/controladores/usuarioController.js');
const actividadController = require('/Users/itztorero/Documents/Documents/VS/topicos/donadito/controladores/actividadController.js');

var path = require('path');
//endpoint default
const registerRoutes = (app) => {
    const solicitud = new solicitudController();
    const usuario = new usuarioController();
    const actividad = new actividadController();

    //endpoint default
    app.get('/', async (req, res) => {
        res.sendFile(path.resolve('vista/registro.html'));
    });

    app.get('/solicitud/:id', solicitud.find);
    app.get('/solicitud', solicitud.find);
    app.post('/solicitud', solicitud.add);
    app.put('/solicitud/:id', solicitud.update);
    app.delete('/solicitud/:id', solicitud.delete);

    app.get('/actividad/:id', actividad.find);
    app.get('/actividad', actividad.find);
    app.post('/actividad', actividad.add);
    app.put('/actividad/:id', actividad.update);
    app.delete('/actividad/:id', actividad.delete);

    app.get('/usuario/:id', usuario.find);
    app.get('/usuario', usuario.find);
    app.post('/usuario', usuario.add);
    app.put('/usuario/:id', usuario.update);
    app.delete('/usuario/:id', usuario.delete);

}

module.exports = { registerRoutes };
