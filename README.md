# Projeto-PetShop 
![](https://img.shields.io/badge/version-1.6.0-green) ![](https://img.shields.io/badge/node-16.19.0-blue) ![](https://img.shields.io/badge/npm-8.19.3-blue) ![](https://img.shields.io/badge/mysql2-2.3.3-red)

---

## Descrição
Trabalho para a disciplina de Tópicos Especiais de Desenvolvimento Web - 2022.2

Foi desenvolvido um sistema de PetShop com objetivo de praticar os conhecimentos adquiridos dentro da disciplina no uso de Node.js, a ORM Sequelize, MySQL e gerenciamento de projetos através do Git.


## Execução do Projeto
Será necessário o uso de MySQL. Para execução do projeto primeiro será necessário usar o Node v16.19.0, versão utilizar no desenvolvimento. Execute primeiramente a instalação dos pacotes:

```
npm install
```

Será preciso que em seu MySQL exista um banco de dados com o nome "petshop", porém é possível modificar o nome do banco no arquivo .env localizado na raiz do projeto, bem como sua senha de acesso e usuário. Está registrado um environment genérico, adeque a seu ambiente para a execução correta do projeto.

Posteriormente, execute o comando abaixo:

```
npx nodemon index.html
```

Pronto! O projeto já está em execução. A rota utilizada em desenvolvimento foi http://localhost:8000, mas você pode modificar a porta na index.html.
