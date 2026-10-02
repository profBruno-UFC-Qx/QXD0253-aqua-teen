# :checkered_flag: Feira Digital

**Feira Digital — Plataforma de Divulgação e Comercialização para Feirantes e Produtores Locais**

A Feira Digital é uma plataforma web destinada à divulgação e comercialização de produtos de feirantes e pequenos produtores locais. A aplicação permitirá o cadastro e gerenciamento de produtos, disponibilização de um catálogo público e realização de pedidos ou reservas, aproximando comerciantes e consumidores por meio de uma solução digital simples e acessível.

## :technologist: Membros da equipe

- **Alfredo Borges do Nascimento Neto** — Matrícula: 564732 — Curso: Redes de Computadores
- **Francisco Lucas Gomes Almeida** — Matrícula: 592740 — Curso: Engenharia de Software
- **Ryan Lopes Braga Brito** — Matrícula: 578267 — Curso: Engenharia de Software

## :bulb: Objetivo Geral

Desenvolver uma plataforma web funcional para divulgação e comercialização de produtos de feirantes e pequenos produtores locais, permitindo o cadastro e gerenciamento de produtos, consulta de um catálogo público e realização ou gerenciamento de pedidos ou reservas.

A aplicação deverá possuir autenticação e diferentes perfis de usuário, além de integrar o frontend ao backend desenvolvido com Strapi por meio de uma API REST.

## :eyes: Público-Alvo

O público-alvo principal é formado por **feirantes e pequenos produtores locais**, especialmente aqueles que possuem pouca presença digital e necessitam de uma forma simples e organizada de divulgar seus produtos.

A plataforma também será destinada aos **consumidores locais**, que poderão consultar os produtos disponíveis, seus preços e informações e realizar pedidos ou reservas.

## :star2: Impacto Esperado

Espera-se ampliar a presença digital dos feirantes e pequenos produtores locais, facilitando a divulgação de seus produtos e aproximando comerciantes e consumidores.

Para os consumidores, a plataforma deverá facilitar o acesso às informações sobre produtos, preços e disponibilidade. Para os comerciantes, deverá oferecer uma ferramenta centralizada para organização e divulgação de seus produtos.

## :people_holding_hands: Papéis ou tipos de usuário da aplicação

A aplicação possuirá diferentes tipos de usuário, com funcionalidades e permissões específicas:

### Usuário não autenticado

- Acessar a plataforma;
- Visualizar o catálogo público;
- Consultar produtos disponíveis;
- Visualizar informações dos produtos e comerciantes.

### Consumidor

- Realizar cadastro e login;
- Consultar o catálogo;
- Pesquisar produtos;
- Visualizar informações dos produtos;
- Realizar pedidos ou reservas;
- Gerenciar seus pedidos ou reservas.

### Feirante / Produtor

- Realizar cadastro e login;
- Gerenciar seu perfil;
- Cadastrar produtos;
- Editar produtos;
- Excluir produtos;
- Adicionar imagens aos produtos;
- Gerenciar informações de preço e disponibilidade;
- Gerenciar pedidos ou reservas relacionados aos seus produtos.

### Administrador

- Gerenciar usuários;
- Gerenciar feirantes e produtos;
- Gerenciar informações da plataforma;
- Administrar os recursos de acordo com suas permissões.

## :triangular_flag_on_post: Principais funcionalidades da aplicação

### Funcionalidades acessíveis a todos os usuários

- Acesso à plataforma web;
- Visualização do catálogo público;
- Consulta e pesquisa de produtos;
- Visualização de informações dos produtos;
- Visualização de preços, fotos e disponibilidade.

### Funcionalidades restritas a usuários autenticados

- Cadastro e login;
- Autenticação;
- Controle de acesso;
- Acesso às funcionalidades de acordo com o perfil do usuário.

### Funcionalidades para feirantes e produtores

- Cadastro de produtos;
- Edição de produtos;
- Exclusão de produtos;
- Upload de imagens;
- Gerenciamento de preços e disponibilidade;
- Gerenciamento de pedidos ou reservas.

### Funcionalidades para consumidores

- Criação de pedidos ou reservas;
- Gerenciamento dos próprios pedidos ou reservas.

### Funcionalidades administrativas

- Gerenciamento de usuários;
- Gerenciamento de feirantes;
- Gerenciamento de produtos;
- Controle das informações da plataforma conforme as permissões administrativas.

### Integração

- Backend desenvolvido com Strapi;
- API REST para comunicação entre frontend e backend;
- Persistência dos dados;
- Interface web responsiva.

## :spiral_calendar: Entidades ou tabelas do sistema

As principais entidades previstas para o sistema são:

- **Usuário** — dados de autenticação e identificação;
- **Perfil/Papel** — definição do tipo de usuário e suas permissões;
- **Feirante/Produtor** — informações dos comerciantes e produtores locais;
- **Produto** — nome, descrição, preço, quantidade/disponibilidade e informações do produto;
- **Imagem do Produto** — imagens associadas aos produtos;
- **Pedido** — registro dos pedidos realizados pelos consumidores;
- **Item do Pedido** — produtos e quantidades associados a um pedido;
- **Reserva** — registro das reservas realizadas, caso esse fluxo seja adotado na implementação.

As entidades deverão ser persistidas no **Strapi** e disponibilizadas ao frontend por meio de uma **API REST**.
