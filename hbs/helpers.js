const hbs = require('hbs');
//HELPERS
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
            palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
        }) //funcion para analizar cada caracter para que unicamente se muestre la palabra
        //mayuscula en la primera letra  
    return palabras.join(' ');
    //Retorna la palabra con la sintaxis correcta
})