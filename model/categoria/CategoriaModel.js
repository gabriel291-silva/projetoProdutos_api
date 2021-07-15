const db = require('../../banco/db_conexao');

 module.exports = class CategoriaModel{
  static getTodosCategoria(callback){
    return db.query('SELECT * FROM tb02_categoria', callback)
   }
   static getId(id, callback) {
    return db.query("SELECT * FROM tb02_categoria WHERE cod_categoria = ?", [id], callback);
     
  }
  static post(produtos, callback) {
    return db.query("INSERT INTO tb02_categoria (descricao) VALUES(?,)", [produtos.descricao] ,  callback);
  
  }
  static delet(id, callback) {
    return db.query("DELETE FROM tb02_categoria WHERE cod_categoria = ? ", [id], callback)
  }
  static alterar(produtos, callback) {
    return db.query("UPDATE tb02_categoria SET descricao = ? WHERE cod_categoria=?", [produtos.descricao,produtos.cod_categoria], callback);
  }
}