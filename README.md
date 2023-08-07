<h1> Web Client Manager API </h1> 

A API foi desenvolvida utilizando Express.

Para a API ser visualizada, você deverá seguir os seguintes passos:

- Carregar os Dados do insomnia em seu computador.

-  E seguir os seguintes passos:

- Com insomnia carregado e importado todos os dados do insomnia disponível no meu git:

- Rota Users:

	Create User: 

pasta só preencher os dados seguindo o exemplo abaixo:
<p>
{
  "name":"teste12345",
  "email":"teste11234@mail.com",
  "password":"123456",
  "phone_number":"9668558745"
}
</p>


	Que após cadastrar seu user com nome e os dados que preferir, já pode fazer o login.


-A Rota login: 
só resta escrever o User que queria fazer login e pronto, 
Obs: (o user deve ester sido cadastrado antes) 

- Update users:
Para fazer o update será necessário ter feito o login antes, pois será nescerio pegar o token do usuário logado.
Basta preencher as informações como name e phone_number, e colocar no bearer o token do usuário cadastrado no login  
E na parte de cima na rota, colocar o id do usuário que queira alterar seguindo depois de users/ na roda ficando dessa maneira users/id que deseja pesquisar

- Get by Id Users: 
	Basta apenas colocar o id que deseja pesquisar após o users, exemplo:
	users/id que deseja pesquisar e também vai precisar do token

- Get all users 
Insira novamente o token, em beearer token do lado do body,
Após isso é só dar um send que irá pesquisar todos.

- Delete users
 	Insira novamente o token, em beearer token do lado do body,
Após isso é só adicione um id depois do users, ex: users/id a ser excluído.

Rota contacts

- Create contacts:
	Coloque um token no beears, logo após, reencha os dados exemplo: 
{
  "name":"frankk",
  "email":"frankk@mail.com",
  "password":"123456",
  "phone_number":"84848487",
	"userId":"8bd5f417-4815-40f1-98dd-f796bda5e205"
} 
E dar um send

- Get all contacts:
Basta colocar o Bears token e dar um send

- Update contact:
Após colocar um beears token, após ter adicionado token, acrescente um name e phone exemplo:
{
  "name":"rogerinho",
  "phone_number":"84848444"
}					
	E url colocar o id a ser procurado a trocar  


- delete contacts 
Após ter colocado o token novamente em bearer, na rota acrescente o id que deseja deletar e pronto.

Qualquer dúvida, só entrar em contato: Elvys Campos


