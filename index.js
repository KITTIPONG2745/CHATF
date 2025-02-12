let express = require('express');
let app = express();

let port = process.env.port || 3000;

app.set('view engine', 'ejs');  // Fixed typo here

app.get('/K', (req, res) => {
    res.render('K');
});

app.get('/N', (req, res) => {
    res.render('N');
});

app.get('/HT', (req, res) => {
    res.render('HT');
});

app.get('/ET', (req, res) => {
    res.render('ET');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);  // Corrected string interpolation
});
