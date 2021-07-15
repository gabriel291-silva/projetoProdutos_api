const db = require('../../banco/db_conexao');

module.exports = class ProdutosModel{

static getTodosProdutos(callback){
 return db.query('SELECT * FROM tb01_produto', callback)
}
static getId(id, callback) {
  return db.query("SELECT * FROM tb01_produto WHERE cod_produto = ?", [id], callback);
}
static getEstoque(id, callback) {
  return db.query("SELECT * FROM `tb01_produto` AS T WHERE cod_produto IN (SELECT cod_produto FROM tb03_estoque as T2 WHERE T2.cod_categoria = ?)", [id], callback);
}

static post(produtos, callback) {
  return db.query("INSERT INTO tb01_produto (descricao, imgsrc, marca, valor) VALUES(? , ? , ? , ?)", [produtos.descricao,produtos.imgsrc,produtos.marca,produtos.valor] ,  callback);

}
static delet(id, callback) {
  return db.query("DELETE FROM tb01_produto WHERE cod_produto = ? ", [id], callback)
}
static alterar(produtos, callback) {
  return db.query("UPDATE tb01_produto SET descricao = ?, imgsrc = ?, marca = ?, valor = ? WHERE cod_produto =?", [produtos.descricao,produtos.imgsrc,produtos.marca,produtos.valor,produtos.cod_produto], callback);
}

};