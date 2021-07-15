const db = require('../../banco/db_conexao');

 module.exports = class EstoqueModel{
  static getTodosEstoque(callback){
    return db.query('SELECT * FROM tb03_estoque', callback)
   }
   static getId(id, callback) {
    return db.query("SELECT * FROM tb03_estoque WHERE id_produto = ?", [id], callback);
  }
  static getCategoria(id, callback) {
    return db.query("SELECT * FROM tb03_estoque WHERE cod_categoria = ?", [id], callback);
  }
  static post(produtos, callback) {
    return db.query("INSERT INTO tb03_estoque (cod_categoria,cod_produto,qtd_produto) VALUES(? , ?, ? )", [produtos.cod_categoria,produtos.cod_produto,produtos.qtd_produto] ,  callback);
  
  }
  static delet(id, callback) {
    return db.query("DELETE FROM tb03_estoque WHERE id_produto = ? ", [id], callback)
  }
  static alterar(produtos, callback) {
    return db.query("UPDATE tb03_estoque SET cod_categoria = ?, cod_produto = ?, qtd_produto = ? WHERE cod_produto=?", [produtos.cod_categoria,produtos.cod_produto,produtos.qtd_produto,produtos.cod_produto], callback);
  }

};