var express = require('express');
var app = express();

const bodyparser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

const userRouter = require('./routers/userRouter')

app.use('/users', userRouter)

app.get('/', (req, res) => {
    res.send('Server running...');
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
