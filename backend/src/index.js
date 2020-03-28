const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();


app.use(cors("*"));

app.use(express.json());  // Informo o express que vai receber dados no 
                          // corpo das requisições  no formato json
app.use(routes);

app.listen(3333);


/**
 * Rota / Recurso
 */
/**
 * Métodos HTTP:
 * 
 * GET: Busca/Listar uma informação do Back-end
 * POST: Cria uma informação no Back-end
 * PUT: Alterar uma informação no Back-end
 * DELETE: Deletar uma informação no Back-end
 */
/**
 * Tipo de parãmetros:
 * 
 * Query Params : Parâmetros nomeados enviados na rota após "?" (Filtros , pagainação)
 * Rote Params  : Parâmetros utilizados para identificar recusrsos
 * Request Budy : Corpo de requisição, utilizados para criar ou alterar recursos
 */
/**
 * SQL: MySql, SQLIte,PostgreeSQL, Oracle , Nicrosoft SQL Server
 * NoSql: MongoDB, CouchDB, etc.
 */
/**
 * Driver: Select * from users
 * Query Builder : table('users').select('*').where()
 * Vamos usar o KNextJS
 */



