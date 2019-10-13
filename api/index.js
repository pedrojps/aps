var restify =  require ( 'restify' );
var errs  =  require ( 'restify-errors' );



const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

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

server.listen(8080, function () {
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
  

  knex('evento').then((dados)=>{
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


  knex('evento')
  .where('id',id)
  .first()
  .then((dados)=>{
      res.setHeader('Access-Control-Allow-Origin', '*');
    if (!dados) {return res.send(new errs.BadRequestError('nada foi encontrado'))}
    res.send(dados);
  },next )

});

server.get('/evento-get-nome/:busca', (req, res, next) => {
  const {busca} = req.params;  


  knex('evento')
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
      res.setHeader('Access-Control-Allow-Origin', '*');
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