# Sistema de Cadastro de Usuários

Este projeto é um sistema simples de cadastro de usuários implementado com HTML, CSS e JavaScript. Ele fornece um formulário onde os usuários podem inserir seus dados, que são então postados para um servidor. Este sistema é projetado para demonstrar conceitos básicos de desenvolvimento web e é adequado para fins educacionais ou pequenos projetos.

## Funcionalidades

- Formulário de cadastro de usuário com campos para nome, email, senha e endereço.
- Função de logar, casdastrar, visualizar usuarios e seus endereços
- Validação de CEPs com chamadas API em tempo real.
- Design responsivo para acessibilidade em diversos dispositivos.

  
## Para rodar

Para começar com este projeto, siga estas etapas:
1. Clone o repositório para sua máquina local:
```bash
git clone https://github.com/JuliaDuran15/ElectronTest
 ```
2. Navegue até o diretório do projeto:
```bash
cd seu-nome-de-projeto
```

3. Insira no seu Mysql Command Line:
```bash
DROP database if exists sistema_usuario;
create database if not exists sistema_usuario;
USE sistema_usuario;
 CREATE TABLE usuarios (
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(255),
	email VARCHAR(255),
	senha VARCHAR(255),
  cep VARCHAR(45),
	rua VARCHAR(45),
	bairro VARCHAR(45),
  localidade VARCHAR(255),
  UF VARCHAR(45)
  );
```
4. Altere o arquivo database:
```bash
const connection = mysql.createConnection({
  host: 'seu_host',
  port: 3306,
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'sistema_usuario'
});
```

5. Se aplicável, instale as dependências:
```bash
npm install electron  
```
```bash
npm install express mysql2@latest concurrently   
```
4. Para iniciar o aplicativo
```bash
npm start
```

5. Docker

## Obs: Caso exista erro em relação á conexão MySql, rodar os seguintes comandos do MySql Commando line:
```bash
ALTER USER 'yourusername'@'yourhost' IDENTIFIED WITH mysql_native_password BY 'yourpassword';
FLUSH PRIVILEGES;
```
