# SW-API-Gateway

A ideia do sistema seria proporcionar um ambiente onde pessoas que querem realizar compras online, porém passam muito tempo fora de casa,
não conseguindo assim receber as mesmas. Assim, pessoas que queiram servir como intermediario e receber a encomenda para outras pessoas 
podem se cadastrar também, e a aplicação seria uma plataforma para conectar essas pessoas.

A aplicação se propõs a servir como gateway e middleware de aplicação, para acessar dois microsserviços: um que controla o cadastro de 
compradores (as pessoas que irão comprar os produtos, e não podem receber), e os recebedores (que irão receber o produto pelo comprador),
onde cada microsserviço controla o CRUD de um desses cadastros.

O acesso a API Gateway se faz pelo seguinte link: https://api-gateway-leonardo-souza.herokuapp.com/
