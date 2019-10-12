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


///////////rotas 

server.get('/palava-get-all', (req, res, next) => {
  

  knex('palavra_chave').then((dados)=>{
  	res.send(dados);
  },next )

});

server.post('/palava-create', (req, res, next) => {
  

  knex('palavra_chave')
  	.insert(req.body)
  	.then((dados)=>{
  	res.send(dados);
  },next )

});

server.get('/palava-get/:id', (req, res, next) => {
	const {id} = req.params;  


	knex('palavra_chave')
	.where('id',id)
	.first()
	.then((dados)=>{
		if (!dados) {return res.send(new errs.BadRequestError('nada foi encontrado'))}
		res.send(dados);
	},next )

});

server.get('/palava-get-nome/:busca', (req, res, next) => {
	const {busca} = req.params;  


	knex('palavra_chave')
	.where('palavra','like','%'+busca+'%')
	.then((dados)=>{
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
		if (!dados) {return res.send(new errs.BadRequestError('nada foi encontrado'))}
		res.send('dados deletados');
	},next )

});