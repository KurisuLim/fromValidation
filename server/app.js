const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

//view engine
app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) =>{
    res.render("index")
})
const server = app.listen(process.env.PORT || '3000',() =>{
    console.log('App is listening on Port %s', server.address().port);
    console.log('Press CTRL+C to quit');
})
module.exports = app;