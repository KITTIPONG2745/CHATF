let express = require('express');
let app = express();
let path = require('path');

let port = process.env.PORT || 3000;

// เก็บข้อมูลพื้นหลังและโปรไฟล์ของผู้ใช้
let userData = {
    background: '',
    profile: ''
};

app.set('view engine', 'ejs');  // Fixed typo here

// กำหนด route เพื่อให้ข้อมูลโปรไฟล์และพื้นหลัง
app.get('/', (req, res) => {
    res.render('home', { background: userData.background, profile: userData.profile });
});

// route สำหรับอัพเดทข้อมูลโปรไฟล์และพื้นหลัง
app.post('/update', express.urlencoded({ extended: true }), (req, res) => {
    if (req.body.background) {
        userData.background = req.body.background;
    }
    if (req.body.profile) {
        userData.profile = req.body.profile;
    }
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
