var restify =  require ( 'restify' );
var errs  =  require ( 'restify-errors' );
var crosMiddleware = require('restify-cors-middleware')


const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

var cros = crosMiddleware({
  orgins:['*'],
  allowHeaders:['API-Token'],
  exposeHeaders:['API-Token-Expiry']
})

server.pre(cros.preflight)
server.use(cros.actual)

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'mydb'
  }
});


server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen(8081, function () {
  console.log('%s listening at %s', server.name, server.url);
});


///////////rotas palavra////////////

server.get('/palava-get-all', (req, res, next) => {
  

  knex('palavra_chave').then((dados)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(dados);
  },next )

});

server.post('/palava-create', (req, res, next) => {
  

  knex('palavra_chave')
    .insert(req.body)
    
    .then((dados)=>{
      res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(dados);
  },next )

});

server.get('/palava-get/:id', (req, res, next) => {
  const {id} = req.params;  


  knex('palavra_chave')
  .where('id',id)
  .first()
  .then((dados)=>{
      res.setHeader('Access-Control-Allow-Origin', '*');
    if (!dados) {return res.send(new errs.BadRequestError('nada foi encontrado'))}
    res.send(dados);
  },next )

});

server.get('/palava-get-nome/:busca', (req, res, next) => {
  const {busca} = req.params;  


  knex('palavra_chave')
  .where('palavra','like','%'+busca+'%')
  .then((dados)=>{    
      res.setHeader('Access-Control-Allow-Origin', '*');
    if (!dados) {return res.send(new errs.BadRequestError('nada foi encontrado'))}
    res.send(dados);
  },next )

});

server.get('/palavaid-event-get/:busca', (req, res, next) => {
  const {busca} = req.params;  


  knex('evento_has_palavra_chave')
  .where('palavra_chave_id',busca)
  .then((dados)=>{    
    res.send(dados);
  },next )

});

server.put('/palava-update/:id', (req, res, next) => {
  const {id} = req.params;  


  knex('palavra_chave')
  .where('id',id)
  .update(req.body)
  .then((dados)=>{
      res.setHeader('Access-Control-Allow-Origin', '*');
    if (!dados) {return res.send(new errs.BadRequestError('nada foi encontrado'))}
    res.send('dados atualizados');
  },next )

});
server.del('/palava-delete/:id', (req, res, next) => {
  const {id} = req.params;  


  knex('palavra_chave')
  .where('id',id)
  .delete()
  .then((dados)=>{
      res.setHeader('Access-Control-Allow-Origin', '*');
    if (!dados) {return res.send(new errs.BadRequestError('nada foi encontrado'))}
    res.send('dados deletados');
  },next )

});

///////////rotas area////////////

server.get('/area-get-all', (req, res, next) => {
  

  knex('area_de_pesquisa').then((dados)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(dados);
  },next )

});

server.post('/area-create', (req, res, next) => {
  

  knex('area_de_pesquisa')
    .insert(req.body)
    .then((dados)=>{
      res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(dados);
  },next )

});

server.get('/area-get/:id', (req, res, next) => {
  const {id} = req.params;  


  knex('area_de_pesquisa')
  .where('id',id)
  .first()
  .then((dados)=>{
      res.setHeader('Access-Control-Allow-Origin', '*');
    if (!dados) {return res.send(new errs.BadRequestError('nada foi encontrado'))}
    res.send(dados);
  },next )

});

server.get('/area-get-nome/:busca', (req, res, next) => {
  const {busca} = req.params;  


  knex('area_de_pesquisa')
  .where('area_de_pesquisa','like','%'+busca+'%')
  .then((dados)=>{
      res.setHeader('Access-Control-Allow-Origin', '*');
    if (!dados) {return res.send(new errs.BadRequestError('nada foi encontrado'))}
    res.send(dados);
  },next )

});

server.put('/area-update/:id', (req, res, next) => {
  const {id} = req.params;  


  knex('area_de_pesquisa')
  .where('id',id)
  .update(req.body)
  .then((dados)=>{
      res.setHeader('Access-Control-Allow-Origin', '*');
    if (!dados) {return res.send(new errs.BadRequestError('nada foi encontrado'))}
    res.send('dados atualizados');
  },next )

});
server.del('/area-delete/:id', (req, res, next) => {
  const {id} = req.params;  


  knex('area_de_pesquisa')
  .where('id',id)
  .delete()
  .then((dados)=>{
      res.setHeader('Access-Control-Allow-Origin', '*');
    if (!dados) {return res.send(new errs.BadRequestError('nada foi encontrado'))}
    res.send('dados deletados');
  },next )

});


///////////rotas evento////////////

server.get('/evento-get-all', (req, res, next) => {
  

  knex.select('evento.*','area_de_pesquisa.area_de_pesquisa')
  .from('evento')
  .innerJoin('area_de_pesquisa', 'area_de_pesquisa.id', 'evento.area_de_pesquisa_id').then((dados)=>{
      res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(dados);
  },next )

});

server.post('/evento-create', (req, res, next) => {
  

  knex('evento')
    .insert(req.body)
    .then((dados)=>{
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(dados);
  },next )

});

server.get('/evento-get/:id', (req, res, next) => {
  const {id} = req.params;  


  knex.select('evento.*','area_de_pesquisa.area_de_pesquisa')
  .from('evento')
  .innerJoin('area_de_pesquisa', 'area_de_pesquisa.id', 'evento.area_de_pesquisa_id')
  .where('evento.id',id)
  .first()
  .then((dados)=>{
      res.setHeader('Access-Control-Allow-Origin', '*');
    if (!dados) {return res.send(new errs.BadRequestError('nada foi encontrado'))}
    res.send(dados);
  },next )

});

server.get('/evento-get-nome/:busca', (req, res, next) => {
  const {busca} = req.params;  


  knex.select('evento.*','area_de_pesquisa.area_de_pesquisa').from('evento')
  .innerJoin('area_de_pesquisa', 'area_de_pesquisa.id', 'evento.area_de_pesquisa_id')
  .where('nome','like','%'+busca+'%')
  .then((dados)=>{
      res.setHeader('Access-Control-Allow-Origin', '*');
    if (!dados) {return res.send(new errs.BadRequestError('nada foi encontrado'))}
    res.send(dados);
  },next )

});

server.put('/evento-update/:id', (req, res, next) => {
  const {id} = req.params;  


  knex('evento')
  .where('id',id)
  .update(req.body)
  .then((dados)=>{
    if (!dados) {return res.send(new errs.BadRequestError('nada foi encontrado'))}
    res.send('dados atualizados');
  },next )

});
server.del('/evento-delete/:id', (req, res, next) => {
  const {id} = req.params;  


  knex('evento')
  .where('id',id)
  .delete()
  .then((dados)=>{
      res.setHeader('Access-Control-Allow-Origin', '*');
    if (!dados) {return res.send(new errs.BadRequestError('nada foi encontrado'))}
    res.send('dados deletados');
  },next )

});

server.post('/evento-palavra', (req, res, next) => {
  
  knex('evento_has_palavra_chave')
    .insert(req.body)
    .then((dados)=>{
    res.send(dados);
  },next )

});
server.get('/evento-palavra-get/:id', (req, res, next) => {
  const {id} = req.params;  

  knex.select('palavra_chave.*').from('evento_has_palavra_chave')
    .innerJoin('palavra_chave','evento_has_palavra_chave.palavra_chave_id','palavra_chave.id')
    .where('evento_id',id)
    .then((dados)=>{
    res.send(dados);
  },next )

});

server.get('/areaid-evento-get/:id', (req, res, next) => {
  const {id} = req.params;  

  knex('evento')
  .where('area_de_pesquisa_id',id)
    .then((dados)=>{
    res.send(dados);
  },next )

});
server.get('/evento-palavra-get', (req, res, next) => {
  
  knex('evento_has_palavra_chave')
    .innerJoin('palavra_chave','evento_has_palavra_chave.palavra_chave_id','palavra_chave.id')
    .then((dados)=>{
    res.send(dados);
  },next )

});
server.get('/artigo-liste-by-evento/:id', (req, res, next) => {
  const {id} = req.params;  


  knex('artigo')
  .where('evento_id',id)
  .then((dados)=>{
    if (!dados) {return res.send(new errs.BadRequestError('nada foi encontrado'))}
    res.send(dados);
  },next )
  });

server.del('/delete-evento-palavra/:id', (req, res, next) => {
  const {id} = req.params;  


  knex('evento_has_palavra_chave')
  .where('evento_id',id)
  .delete()
  .then((dados)=>{
      res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('dados deletados');
  },next )

});


////////////////////////usuario///////////
server.post('/altentic-adimin-get', (req, res, next) => {

  knex('adiministrador')
  .where('senha',req.body.senha).andWhere('email',req.body.nome)
    .then((dados)=>{
    res.send(dados);
  },next )

});

server.post('/altentic-usuario-get', (req, res, next) => {

  knex('usuario')
  .where('senha',req.body.senha).andWhere('email',req.body.nome)
    .then((dados)=>{
    res.send(dados);
  },next )

});

server.post('/user-create', (req, res, next) => {
  

  knex('usuario')
    .insert(req.body)
    .then((dados)=>{
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(dados);
  },next )

});

server.put('/user-update/:id', (req, res, next) => {
  const {id} = req.params;  

  knex('usuario')
  .where('id',id)
  .update(req.body)
  .then((dados)=>{
    if (!dados) {return res.send(new errs.BadRequestError('nada foi encontrado'))}
    res.send('dados atualizados');
  },next )

});
////////////////////////////artigo/////////////////////
server.post('/artigo-create', (req, res, next) => {
  

  knex('artigo')
    .insert(req.body)
    .then((dados)=>{
    res.send(dados);
  },next )

});
server.get('/artigo-get-all', (req, res, next) => {
  

  knex('artigo')
    .then((dados)=>{
    res.send(dados);
  },next )

});
server.post('/autores-create', (req, res, next) => {
  
  knex('autores')
    .insert(req.body)
    .then((dados)=>{
    res.send(dados);
  },next )

});