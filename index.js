let express = require('express');
let app = express();

let port = process.env.port || 3000;

app.set('view engine', 'ejs');  // แก้ไข typo

app.get('/', (req, res) => {
    res.render('Home');
});

app.get('/ket', (req, res) => {
    res.render('Ket');
});

app.get('/non', (req, res) => {
    res.render('Non');
});

app.get('/te', (req, res) => {
    res.render('Te');  // ตรวจสอบให้ตรงกับชื่อไฟล์ของเทมเพลต
});

app.get('/earth', (req, res) => {
    res.render('Earth');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);  // แก้ไขการใช้ string interpolation
});
