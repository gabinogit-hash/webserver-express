const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/publico'));
//EXPRESS HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');
// app.get('/', (req, res) => {
//         res.render('home');
// })
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'GaBIno'
    });
})
app.get('/about', (req, res) => {
        res.render('about');
    })
    //-----------------------------------
    // app.get('/', (req, res) => {
    //     // res.send('Hola Mundo');
    //     let salida = {
    //         nombre: 'Gabino',
    //         edad: '20',
    //         url: req.url
    //     };
    //     res.send(salida);
    // })
    //------------------------------------
app.listen(port, () => {
    console.log(`Escuchando Peticiones en el Puerto ${port}`);
});