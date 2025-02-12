let express = require('express');
let app = express();

let port = process.env.port || 3000;

app.set('view engine', 'ejs');  // Fixed typo here

app.get('/home', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);  // Corrected string interpolation
});

