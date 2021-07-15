var express = require('express');
var router = express.Router();
var EstoqueModel = require('../model/estoque/EstoqueModel');
var RespostaClass = require('../model/RespostaClass');

router.get("/",function(req,res,next){
  EstoqueModel.getTodosEstoque(function(erro,retorno){
  let resposta = new RespostaClass();
  if(erro){
    resposta.erro = true;
    resposta.msg =   ' ocorreu um erro'
    console.log('erro:', erro)
  }else{
    resposta.dados = retorno;
  }
  res.json(resposta);
  })
  
  
  });

  
router.post("/?", function (req, res, next) {
  EstoqueModel.post(req.body, function (erro, retorno) {
    let resposta = new RespostaClass();
    if (erro) {
      resposta.erro = true;
      resposta.msg = 'Ocorreu um erro'
      console.log('erro:', erro);
    } else {
      if (retorno.affectedRows > 0) {
        resposta.msg = 'cadastro reslizado com sucesso';
      } else {
        resposta.erro = true;
        resposta.msg = 'não foi possivel relizar a operação';
       
      }
    }
    console.log('resp', resposta.dados);
    res.json(resposta);
  })
});


router.delete("/:id", function (req, res, next) {
  EstoqueModel.delet(req.params.id, function (erro, retorno) {
    let resposta = new RespostaClass();
    if (erro) {
      resposta.erro = true;
      resposta.msg = 'Ocorreu um erro'
      console.log('erro:', erro);
    } else {
      if (retorno.affectedRows > 0) {
        resposta.msg = 'cadastro deletado com sucesso';
      } else {
        resposta.erro = true;
        resposta.msg = 'não foi possivel relizar a operação';
      }
    }
    console.log('resp', resposta.erro);
    res.json(resposta);
  })
});

router.put("/", function (req, res, next) {
  EstoqueModel.alterar(req.body, function (erro, retorno) {
    let resposta = new RespostaClass();
    if (erro) {
      resposta.erro = true;
      resposta.msg = 'Ocorreu um erro'
      console.log('erro:', erro);
    } else {
      if (retorno.affectedRows > 0) {
        resposta.msg = 'cadastro alterado com sucesso';
      } else {
        resposta.erro = true;
        resposta.msg = 'não foi possivel relizar a operação';
      }
    }
    console.log('resp', resposta);
    res.json(resposta);
  })
});
router.get("/:cat",function(req,res,next){
  EstoqueModel.getCategoria(req.params.cat,function(erro,retorno){
    let resposta = new RespostaClass();
  
    if(erro){
      resposta.erro=true;
      resposta.msg = 'ocorreu um erro';
      console.log('erro:',erro)
    }else{
      resposta.dados=retorno;
    }
    res.json(resposta);
  })
  });

  module.exports = router;