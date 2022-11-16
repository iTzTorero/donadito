var path = require('path');
    //endpoint default
    const registerRoutes = (app) => {
        //endpoint default
        app.get('/', async (req, res) => {
                res.sendFile(path.resolve('vista/registro.html'));
        });
    }
    
    module.exports = { registerRoutes};
    