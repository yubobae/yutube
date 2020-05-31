const express = require('express');
const app = express();

const PORT = 4000;
function handleListening (){
    console.log(`Listening on: http://localhost:${PORT}`);
}
//응답
function handleHome(req, res) {
    res.send("Hello from home");
}
//응답
function handleProfile(req, res) {
    res.send('you are on my profile!')
}
//router 생성.
app.get('/', handleHome);
app.get('/profile', handleProfile)
//서버생성
app.listen(PORT, handleListening);