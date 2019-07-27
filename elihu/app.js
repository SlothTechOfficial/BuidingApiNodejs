const http=require("http");

//console.log(http);

const server = http.createServer((req, res) => {
	//console.log(req);
	let tokens=req.url;
	const vars=tokens.split('?');
	const url=vars[0];
	const queryString=vars[1];

	console.log(url, queryString);

	const method=req.method;
	//const headers=req.headers;
	//console.log(url,method);
	//console.log(headers);
	//console.log(req);

	switch(url)
	{
		case '/user':
			if (method === 'POST') {
				const body = [];
				req.on('data', (chunk) =>{
					body.push(chunk);
				});
				req.on('end', () =>{
					const bodyParsed =Buffer.concat(body).toString();
					console.log(bodyParsed);
					const reqInstance =JSON.parse(bodyParsed);
					console.log(reqInstance.user);
				});
			}
			else
			{

			}
		break;

		case '/contactos/id':
			if (method === 'GET' && queryString != '') {
				let divId=queryString.split("=")[1];
				const id=divId[0];
				console.log(id);

				const contacto=	{
					idContacto: id,
					username: 'happychuwy',
					telefono: '9982131296'
				}
				res.statusCode=200;
				res.setHeader('Content-type', 'application/json');
				res.end(JSON.stringify(contacto));
			}
			else
			{

			}
		break;

		default:
		res.statusCode=404;
		res.end(JSON.stringify({err: 'Not Found'}));

	}

	///////////////////////////////////////////// MI RECURSO ////////////////////////////////////////
	/*
	if(url === '/contactos' && method == 'GET')
	{
		const contacto=	{
			idContacto: 5,
			username: 'happychuwy',
			telefono: '9982131296'
		}
		res.statusCode=200;
		res.setHeader('Content-type', 'application/json');
		res.end(JSON.stringify(contacto));
	}
	else if(url === '/contactos/5' && method == 'GET')
	{
		const contacto=	{
			idContacto: 5,
			username: 'happychuwy',
			telefono: '9982131296'
		}
		res.statusCode=200;
		res.setHeader('Content-type', 'application/json');
		res.end(JSON.stringify(contacto));
	}	
	else
	{
		res.statusCode=404;
		res.end(JSON.stringify({err: 'Not Found'}));
	}
	*/
});

server.listen(2000);

/*if(url === '/user')
	{
		const user=	{
			id: 222,
			username: 'yo',
			name: 'elihu',
			lastName: 'romero'
		}
		res.statusCode=200;
		res.setHeader('Content-type', 'application/json');
		res.end(JSON.stringify(user));
	}
	else
	{
		res.statusCode=404;
		res.end(JSON.stringify({err: 'Not Found'}));
	}
	*/
	//res.statusCode=404;
	/*const _res=	{
		hola:''
	}
	res.end(JSON.stringify(_res));*/