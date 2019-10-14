const http = require('http');
//console.log(http);

const server = http.createServer((req,res) =>{
    let url = req.url;
    const tokens = url.split('?');
    url = tokens[0];
    const queryString = tokens[1];

    const method = req.method;
    const headers = req.headers;
    console.log(url,method);
    //console.log(headers);

    switch(url)
    {
        case '/mascota':
            if(method === 'POST')
            {
                const body = [];
                req.on('data',(chunk)=>{
                    body.push(chunk);
                    console.log(chunk);
                })
                req.on('end',()=>{
                    const bodyParsed = Buffer.concat(body).toString();
                    console.log(bodyParsed);
                    const reqInstance = JSON.parse(bodyParsed);
                    console.log(reqInstance.username);
                })
                res.statusCode = 200; 
                res.setHeader('Content-Type','application/json');
            }
    }

   // console.log(req);
   /* if(url === '/user' && method == 'GET')
    {
        const user = {
            id: 222,
            username: 'algo',
            name: 'algo dos',
            lastName: 'apellido'
        }
        res.statusCode = 200; 
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify(user))
    } else 
    {
        res.statusCode = 404;
        res.end(JSON.stringify({err: 'not found'}))
    }*/
    
//este get si funciona :v
   /*if(url === '/mascota' && method == 'GET')
    {
        const mascota = {
            id:44,
            nombre: 'Lomito',
            especie: 'Felino',
            edad: '18 meses',
            status: 'Adoptado'
        }
        res.statusCode = 200; 
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify(mascota))
    }
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({err: 'not found'}))
    }*/
 /*   res.statusCode = 404;
    const _res = {
        hola: ''
    }
    res.end(JSON.stringify(_res));
*/
});

server.listen(3000);