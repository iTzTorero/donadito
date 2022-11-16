const express = require('express');
const bodyParser = require('body-parser');
const {registerRoutes} = require('./controlador/rutas.js')
const cors = require('cors');

function spawnServer(){
    const app = express();
    const port = 8082;

    //Configuracion cors
    //app.use(cors());
    
    app.use(express.static(__dirname + '/vista'));
    app.use(bodyParser.json());

    //configurar vistas
    app.set('views', __dirname + '/vista')
    app.set('view engine', 'html');
    
    //app.set('view engine', 'ejs')

    //Middleware errores
    app.use((err, req, res, next) => {
        //res.json({message: 'Internal server error.'}, 500);
        res.status(500).json({message: 'Internal server error.'})
    })

    registerRoutes(app);

    app.listen(port, () => {
        console.log(`RESTful server running at http://127.0.0.1:${port}`);
    });
}


spawnServer();

