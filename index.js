const express = require('express');
const data = require('./fakeData/data.json');
const cors = require('cors');
const app = express();
const port = 5000;


app.use(cors);


app.get('/', (req, res )=>{
    res.send('just for test');
})

app.get('/data', (req, res)=>{
    res.send(data)
})

app.listen(port, ()=>{
    console.log('server is running')
})