var express = require('express');
const app = require('../projeto');
var router = express.Router();


//*var router = require('../util/db');

/* GET home page. */
router.get('/', function(req, res,) {
  res.render('index', {title : 'cadastro de livros' , });
});







app.get('/submit_form',function(req,res){
  res.render('/sumit_form');
});

/*leituta de banco de dados
router.get('listar', function(req,res){
  db.query('SELEC * FROM Cadastro_de_livros',[],function(erro,resultado){
    if(erro){
    res.status(200).send(erro)
    }
    res.render('lista',{lista : resultado})

  )};

}):*/







module.exports = router;

