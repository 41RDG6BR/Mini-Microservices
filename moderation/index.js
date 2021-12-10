const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', (res, req) => {

})

app.listen(4003, () => {
    console.log('Listening 4003')
})