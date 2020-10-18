const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// entender informações json
app.use(bodyParser.json())
// entender parâmetros de url
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({
   origin: 'http://localhost:3000'
}));

require('./controllers/authController')(app);
require('./controllers/boardController')(app);

app.listen(3333);