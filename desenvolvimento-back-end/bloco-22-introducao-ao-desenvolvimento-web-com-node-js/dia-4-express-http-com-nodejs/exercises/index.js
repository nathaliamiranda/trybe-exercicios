const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => res.json( { "message": 'pong' }))

app.post('/hello', (req, res) => {
    const { name } = req.body;
    res.status(200).json({ "message": `Hello, ${name}!` })
  })

app.post('/greeting', (req, res) => {
    const { name, age } = req.body;
    
    if(parseInt(age, 10) <= 17) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    res.status(200).json({ message: `Hello, ${name}!` })
})

app.use( function (err, _req, res, _next) {
    res.status(500).send(`Something bad happened! Message: ${err.message}`);
});

app.listen(3000, () => console.log('listening on port 3000'));
