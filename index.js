let express =  require('express');
let app = express();

let port = process.env.port || 3000 ;

app.set('view engne','ejs');

app.get('/', (req ,res) => {
    res.render('home')
})

app.get('/about', (req ,res) => {
    res.render('about')
})

app.listen(port, () =>{
    console.log('Server is running on port ${port}')
})
