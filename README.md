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
3. Rode o Docker-Compose:
```bash
docker pull mysql
```
```bash
docker-compose up -d
```
4. Altere o arquivo database :
```bash
const connection = mysql.createConnection({
  host: 'seu_host',
  port: 3306,
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'sistema_usuario'
});
```
5. Altere o arquivo docker-compose.ywl :
```bash
version: '3.8'
services:
  mysql:
    image: mysql:latest
    environment:
      MYSQL_ROOT_PASSWORD: sua_senha
      MYSQL_DATABASE: sistema_usuario
    ports:
      - "3307:3306"
    volumes:
      - mysql_data:/var/lib/mysql

volumes:
  mysql_data:

```
5. Se aplicável, instale as dependências:
```bash
npm install electron  
```
```bash
npm install express mysql2@latest concurrently   
```
6. Para iniciar o aplicativo
```bash
npm start
```
