# :package: Entrega Final

## :computer: Como executar o projeto

Node.js 20 ou 22 e npm 9+. Copie `.env.example` para `backend/.env`, `frontend/.env.example` para `frontend/.env`, execute `npm install`, `npm run dev:api` e `npm run dev`. Consulte o README para as permissões.

## :key: Credenciais de acesso para teste

Não existem credenciais fixas ou segredos versionados. Crie consumidor e feirante pela tela de cadastro. Crie administrador na primeira execução do painel Strapi (`/admin`).

## :robot: Uso de ferramentas de Inteligência Artificial

Você usou alguma ferramenta de IA (ex: ChatGPT, Claude, GitHub Copilot) no desenvolvimento deste projeto? Se sim, indique qual(is) ferramenta(s), explique como você a utilizou e como ela foi capaz de ajudá-lo. Se não usou, indique "Não utilizei".

## :construction: Maiores dificuldades encontradas

Integração das relações do Strapi, autorização por proprietário e preservação do preço histórico dos itens de pedido.

## :warning: Limitações conhecidas

Não há pagamento online. A moderação de publicação é feita no painel Strapi. Para produção, recomenda-se migrar o JWT transitório para cookie HttpOnly por BFF.

<!-- kit:fim-secoes-genericas -->

## :desktop_computer: Tecnologias e bibliotecas utilizadas

React, TypeScript, Vite, React Router, Lucide React, Strapi 5, Users & Permissions, Upload, SQLite e Vitest.
