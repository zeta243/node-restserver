require('./config/config');
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', function(req, res) {
    res.json('Hello World')
})

app.get('/usuario', function(req, res) {
        res.json('get Usuario');
    })
    //crear registro usuario
app.post('/usuario', function(req, res) {
        let body = req.body;
        if (body.nombre === undefined) {

            res.status(400).json({
                ok: false,
                mensaje: 'El nombre es necesario'
            })

        } else {
            res.json({
                persona: body
            })
        }

    })
    //actualizar usuario
app.put('/usuario/:id', function(req, res) {

        let id = req.params.id;
        res.json({
            id: id
        })
    })
    //eliminar usuario
app.delete('/usuario', function(req, res) {
    res.json('delete Usuario')
})
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', process.env.PORT);
})