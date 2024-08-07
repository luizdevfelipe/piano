const { run } = require('./app/gemini.js');
const express = require('express');

// definição da aplicação
const app = express();
const router = express.Router();

// definição de constantes 
const resources_path = __dirname + '/resources/';
const views_path = __dirname + '/resources/views';
const port = process.env.APP_PORT;

// definição de rotas
router.get('/', function (req, res) {
  res.sendFile(views_path + '/index.html');
});

router.post('/', function (req, res) {
  res.sendFile(views_path + '/index.html');
  run();
});

// inicialização da aplicação
app.use(express.static(resources_path));
app.use('/', router);

app.listen(port)
