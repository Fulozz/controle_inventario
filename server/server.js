/**
 * file: server.js
 * description: arquivo responsável por toda a configuração e execução da aplicação
 * data: 07/10/2023
 * author: Thiago Silva Andrade
 */

const app = require('./src/app')

const port = process.env.PORT || 3001


//teste
app.listen(port, ()=> {console.log('Ta funcionando na porta: ' + port);});
// DEPURAR SEMPRE O CODIGO PARA SABER AS REGRAS DE NEGOCIOS E GARANTIR QUE ESTA INDO CERTO