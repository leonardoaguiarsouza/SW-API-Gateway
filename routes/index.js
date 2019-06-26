var express = require('express');
var router = express.Router();

/*requires do JWT*/
var jwt = require('jsonwebtoken'); //para usar a API
const SECRET = 'senha';
/*ATENÇAO!!! A senha usada aqui como uma var é somente para simplificar! NUNCA DEVE SER UTILIZADA ASSIM!!!! Salve como uma variável de ambiente e use o pacote dotenv-safe para recuperá-la, ou carregue-a de um arquivo do servidor com as permissões adequadas!!! */

var httpProxy = require('express-http-proxy');

var microserviceProxyComp = httpProxy('http://localhost:3001');
var microserviceProxyReceb = httpProxy('http://localhost:3002');

router.get('/compradores', function (req, res, next) {
  req.originalUrl = '/api' + req.originalUrl;
  req.url = '/api' + req.url;
    microserviceProxyComp( req, res, next );
}  );

router.post('/compradores', verificaToken, function (req, res, next) {
  req.originalUrl = '/api' + req.originalUrl;
  req.url = '/api' + req.url;
    microserviceProxyComp( req, res, next );
}  );

router.put('/compradores', verificaToken, function (req, res, next) {
  req.originalUrl = '/api' + req.originalUrl;
  req.url = '/api' + req.url;
    microserviceProxyComp( req, res, next );
}  );

router.delete('/compradores', verificaToken, function (req, res, next) {
  req.originalUrl = '/api' + req.originalUrl;
  req.url = '/api' + req.url;
    microserviceProxyComp( req, res, next );
}  );

router.get('/recebedores', function (req, res, next) {
  req.originalUrl = '/api' + req.originalUrl;
  req.url = '/api' + req.url;
    microserviceProxyReceb( req, res, next );
}  );

router.post('/recebedores', verificaToken, function (req, res, next) {
  req.originalUrl = '/api' + req.originalUrl;
  req.url = '/api' + req.url;
    microserviceProxyReceb( req, res, next );
}  );

router.put('/recebedores', verificaToken, function (req, res, next) {
  req.originalUrl = '/api' + req.originalUrl;
  req.url = '/api' + req.url;
    microserviceProxyReceb( req, res, next );
}  );

router.delete('/recebedores', verificaToken, function (req, res, next) {
  req.originalUrl = '/api' + req.originalUrl;
  req.url = '/api' + req.url;
    microserviceProxyReceb( req, res, next );
}  );

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function verificaToken(req, res, next) {
  var token = req.headers['verifica'];
  if (!token)
    return res.status(401).send({ message: 'É necessário logar no sistema.' });

  jwt.verify(token, SECRET, function (err, decoded) {
    if (err)
      return res.status(403).send({ auth: false, message: 'Failed to authenticate token.' });

    req.userData = decoded;
    next();
  });
}

/*criação do endpoint(rota) para login*/
router.post('/login', function (req, res) {
  console.log('login...');
  //verifica se o login está válido
  if (req.body.user === 'leo' && req.body.pass === '123') {
    var payload = {
      user: req.body.user,
      role: 'admin', // estes dados viriam do banco
      id: 1
    };

    var token = jwt.sign(payload, SECRET, { expiresIn: '3m' });

    res.status(200).send({ token: token });
  }else
    res.status(401).send({ user: 'user', pass: 'pass' });//envia erro NONAUTHORIZED
});

module.exports = router;
