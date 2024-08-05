const express = require('express');
// importar arquivo gemini.js para que a função run() seja executada

// definição da aplicação
const app = express();
const router = express.Router();

// definição de constantes 
const resources_path = __dirname + '/resources/';
const views_path = __dirname + '/resources/views';
const port = 8002;

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
