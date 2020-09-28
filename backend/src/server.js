const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

// entender informações json
app.use(bodyParser.json())
// entender parâmetros de url
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

app.listen(3333);