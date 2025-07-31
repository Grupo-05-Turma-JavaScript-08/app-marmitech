Backend do Marmitech
Este projeto consiste em um backend para o sistema de delivery de marmitas Marmitech, focado na gestão de produtos. A API foi desenvolvida seguindo o padrão RESTful e implementa um CRUD completo para a entidade Produto.

---

Funcionalidades
O backend do Marmitech oferece as seguintes funcionalidades para a gestão de produtos:

Listar todos os produtos: Retorna uma lista completa de todos os produtos disponíveis.
Buscar produto por ID: Permite a busca de um produto específico através de seu identificador único.
Cadastrar novo produto: Adiciona um novo produto ao catálogo.
Atualizar produto: Modifica as informações de um produto existente.
Deletar produto: Remove um produto do catálogo.
Buscar produtos por nome: Realiza uma busca por produtos que contenham um determinado nome.

---

Tecnologias Utilizadas
TypeScript: Linguagem de programação.
Node.js: Ambiente de execução.
TypeORM: ORM (Object-Relational Mapping) para interagir com o banco de dados.

---

Estrutura da Model Produto
A entidade Produto representa um item do catálogo e possui os seguintes atributos:

| Atributo | Tipo | Descrição |
| :--- | :--- | :--- |
| id | number | Identificador único gerado automaticamente. |
| nome | string | Nome do produto. |
| descricao | string | Descrição detalhada do produto. |
| preco | number | Preço do produto. |
| quantidade | number | Quantidade em estoque do produto. |

---
Projeto desenvolvido por 

Felipe Alves
Gabriel Martins
Larissa Ruiz
Mateus Pereira
Micheli Martins
Viviane Santos