let express = require('express');
let app = express();

let port = process.env.port || 3000;

app.set('view engine', 'ejs');  // Fixed typo here

app.get('/', (req, res) => {
    res.render('Home');
});

app.get('/K', (req, res) => {
    res.render('Ket');
});

app.get('/N', (req, res) => {
    res.render('Non');
});

app.get('/HT', (req, res) => {
    res.render('Hong Te');
});

app.get('/ET', (req, res) => {
    res.render('Earth');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);  // Corrected string interpolation
});
