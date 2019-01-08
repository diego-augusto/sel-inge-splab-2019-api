require('dotenv').config()

var express = require('express');
var app = express();

const bodyparser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

const userRouter = require('./routers/userRouter')
const softwareRouter = require('./routers/softwareRouter')
const testRouter = require('./routers/testRouter')
const authRouter = require('./routers/authRouter');
const signupRouter = require('./routers/signupRouter');
const authorizeMiddleware = require('./middlewares/authorize')

app.use('/signin', authRouter)
app.use('/signup', signupRouter)

app.use(authorizeMiddleware.authorize)

app.use('/users', userRouter)
app.use('/softwares', softwareRouter)
app.use('/tests', testRouter)

app.get('/', (req, res) => {
    res.send('Server running...');
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
