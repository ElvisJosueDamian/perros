require('dotenv').config();
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de Handlebars
app.engine('hbs', engine({
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    defaultLayout: 'main',
    extname: 'hbs',
    partialsDir: path.join(__dirname, 'views', 'partials')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

// Carpeta pública para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


// Ruta de inicio
app.get('/', (req, res) => res.render('pages/home'));

app.get('/pastor', (req, res) => res.render('pages/pastor'));

app.get('/golden', (req, res) => res.render('pages/golden'));

app.get('/pequines', (req, res) => res.render('pages/pequines'));


// Servidor escuchando
app.listen(PORT, () => console.log(`Servidor iniciado en http://localhost:${PORT}`));
