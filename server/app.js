const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');

//view engine
app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

var users = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.com',
        telephone: '123456789012'
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@doe.com',
        telephone: '123456789012'
    },
    {
        id: 3,
        firstName: 'Juan',
        lastName: 'Doe',
        email: 'juan@doe.com',
        telephone: '123456789012'
    },
]

app.get('/', (req,res) =>{
    res.render("index",{
        title: 'Customers',
        users: users
    })
});

app.post('/thanks', (req,res) => {
    let newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.telephone
    }
})
const server = app.listen(process.env.PORT || '3000',() =>{
    console.log('App is listening on Port %s', server.address().port);
    console.log('Press CTRL+C to quit');
})
module.exports = app;