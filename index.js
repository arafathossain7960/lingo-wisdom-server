const express = require('express');
const data = require('./fakeData/data.json');
const details = require('./fakeData/languageDetails.json');
const cors = require('cors');
const e = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors())





app.get('/', (req, res )=>{
    res.send('just for test');
})

app.get('/language', (req, res)=>{
    res.send(data)
})
app.get('/details/:id', (req, res)=>{
    const id = req.params.id;
    const selectedDetails = details.find(d => d.id === id)
  
    res.send(selectedDetails)
})

app.get('*', (req, res)=>{
    res.send(`<h1>Something went wrong</h1>`)
})

app.listen(port, ()=>{
    console.log(`the server is running on ${port}`)
})