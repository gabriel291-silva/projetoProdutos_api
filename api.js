const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const api = express();
const port = 3000;
const router = express.Router();

const ProdutoRouter = require('./router/ProdutoRouter');
const CategoriasRouter = require('./router/CategoriaRouter');
const EstoqueRouter = require('./router/EstoqueRouter');
api.use(cors());

api.use(bodyparser.urlencoded({extended: true}));
api.use(bodyparser.json());

router.get("/", (req,res)=> res.json({
  mensagem: 'api_estagio online!...'
}) );

api.use("/",router);
api.use('/produtos',ProdutoRouter);
api.use('/categorias',CategoriasRouter);
api.use('/estoque',EstoqueRouter);

api.listen(port);
console.log('run api...');