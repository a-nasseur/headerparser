const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3000;

// Serving static files
app.use('/public', express.static(__dirname + '/public'));

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.sendFile(__dirname +'/views/index.html')
})

app.get('/api/:whoami', (req, res) => {

    const headers = {
        ipaddress: req.headers.referer,
        language: req.headers['accept-language'],
        software: req.headers['user-agent']
    }
    console.log(headers)
    
    res.json(headers)
})



app.listen(port, () => {
    console.log(`Server running on port, ${port}`)
})