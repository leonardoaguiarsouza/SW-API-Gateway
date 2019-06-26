# SW-API-Gateway

A ideia do sistema seria proporcionar um ambiente onde pessoas que querem realizar compras online, porém passam muito tempo fora de casa,
não conseguindo assim receber as mesmas. Assim, pessoas que queiram servir como intermediario e receber a encomenda para outras pessoas 
podem se cadastrar também, e a aplicação seria uma plataforma para conectar essas pessoas.

A aplicação se propõs a servir como gateway e middleware de aplicação, para acessar dois microsserviços: um que controla o cadastro de 
compradores (as pessoas que irão comprar os produtos, e não podem receber), e os recebedores (que irão receber o produto pelo comprador),
onde cada microsserviço controla o CRUD de um desses cadastros.

O acesso a API Gateway se faz pelo seguinte link: https://api-gateway-leonardo-souza.herokuapp.com/.

A auntenticação se faz pelo https://api-gateway-leonardo-souza.herokuapp.com/login.
Onde o usuário é leo, e senha é 123. Após isso, um token é gerado, e será utilizado para ser colocado do header para comprovar a autenticação. { verifica: token }

Para acessar o microsserviço do CRUD dos compradores: https://api-gateway-leonardo-souza.herokuapp.com/compradores.

Para acessar o microsserviço do CRUD dos recebedores: https://api-gateway-leonardo-souza.herokuapp.com/recebedores.

As requisições GET dispensam autenticação, porém as demais requisições vão necessitar do token no header para realizar o controle da
sessão.

A estrutura das informações que irão no body das requisições post e put dos microsserviços são as seguintes:

Compradores
id
nome
cpf
produto
valor

Recebedores
id
nome
cpf
endereco
turno


