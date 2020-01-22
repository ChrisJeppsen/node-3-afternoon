require('dotenv').config();
const express = require('express'),
    massive = require('massive'),
    cors = require('cors'),
    {SERVER_PORT, CONNECTION_STRING} = process.env,
    ctrl = require('./product_controller'),
    app = express();

    app.use(express.json());
    app.use(cors());

    massive(CONNECTION_STRING).then(dbInstance => {
        app.set('db', dbInstance)
        console.log('db connected')
    }) 
    .catch(err => console.log(err))

    app.post('/api/products', ctrl.create);
    app.put('/api/products/:id', ctrl.update);
    app.get('/api/products/:id', ctrl.getOne);
    app.get('/api/products', ctrl.getAll);
    app.delete('/api/products/:id', ctrl.delete);


    app.listen(SERVER_PORT, () => console.log(`server is listening on ${SERVER_PORT}`))




