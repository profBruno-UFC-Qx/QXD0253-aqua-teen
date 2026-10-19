# Feira Digital de Baturité

> Plataforma para divulgar a Feira Livre de Baturité, aproximar feirantes e consumidores e organizar pedidos para retirada e pagamento combinados diretamente com cada banca.

## Visão geral

A Feira Digital leva a experiência da feira para a web: consumidores encontram produtos e fazem pedidos; feirantes mantêm sua banca, catálogo, fotos e atendimento organizados. A aplicação também apresenta a história, a localização da feira e pontos turísticos de Baturité para visitantes.

## Recursos

| Área | Recursos |
| --- | --- |
| Catálogo público | Busca, filtros por categoria e preço, detalhes, fotos e estoque. |
| Consumidor | Cadastro, perfil com foto e progresso, carrinho e histórico de pedidos. |
| Feirante | Perfil comercial, WhatsApp, produtos, fotos, categorias e pedidos recebidos. |
| Pedidos | Validação de estoque/preço no servidor, baixa de estoque e abertura de conversa no WhatsApp. |
| Baturité | Localização da feira, história da cidade e guia de pontos turísticos. |
| Administração | Gestão global pelo painel nativo do Strapi. |

## Tecnologias

- Frontend: React, TypeScript, Vite, React Router e Lucide.
- Backend: Strapi 5.30.1, Users & Permissions e Upload.
- Banco de desenvolvimento: SQLite com `better-sqlite3`.
- Comunicação: API REST do Strapi.
- Arquivos: mídia local em `backend/public/uploads`.

## Estrutura

```text
.
├── frontend/                  # React/Vite
│   ├── src/main.tsx            # Páginas e componentes
│   ├── src/api.ts              # Camada da API REST
│   └── src/styles.css          # Interface responsiva
├── backend/                   # Strapi 5
│   └── src/api/               # Content-types, rotas e regras
└── package.json               # Workspaces e comandos
```

## Pré-requisitos

- Node.js 20 ou 22.
- npm 9 ou superior.
- Duas janelas de terminal.

```bash
node --version
npm --version
```

> Use o frontend em `http://localhost:5173`. A porta `5174` não é a porta pública do Vite e pode retornar erro 426.

## Instalação

Na raiz do projeto:

```bash
npm install
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

Em `backend/.env`, substitua os valores demonstrativos por segredos locais. Para gerar uma chave:

```bash
openssl rand -base64 32
```

Use quatro valores separados por vírgula em `APP_KEYS`. Nunca envie `backend/.env` ao repositório.

O arquivo `frontend/.env` deve conter:

```env
VITE_STRAPI_URL=http://localhost:1337
```

## Como rodar

### 1. Backend Strapi

No primeiro terminal:

```bash
npm run dev:api
```

Espere a mensagem `Strapi started successfully`. No primeiro acesso, crie o administrador em:

```text
http://localhost:1337/admin
```

Essa conta administrativa é diferente de uma conta de consumidor ou feirante criada no site.

### 2. Frontend

No segundo terminal:

```bash
npm run dev
```

Abra:

```text
http://localhost:5173
```

## Como criar usuários

### Consumidor

1. Clique em **Criar conta**.
2. Selecione **Consumidor**.
3. Informe nome, e-mail e senha.
4. Após entrar, abra **Perfil** para incluir cidade e foto.
5. Navegue em **Produtos**, adicione itens e confirme o pedido.

Conta de demonstração já criada no banco local:

```text
E-mail: consumidor.teste@feiradigital.local
Senha: Consumidor123
```

### Feirante ou produtor

1. Clique em **Criar conta**.
2. Selecione **Feirante / produtor**.
3. Informe nome, nome comercial, cidade e WhatsApp com DDD.
4. Abra **Perfil** e complete foto e dados da banca.
5. Acesse **Minha área** → **Novo produto**.
6. Escolha categoria, preço, unidade, quantidade e até cinco fotos.
7. Clique em **Salvar e publicar**.

O WhatsApp é obrigatório para novos feirantes porque é usado após a confirmação do pedido. Ele não aparece no catálogo público.

## Como funciona o pedido

```text
Consumidor escolhe um produto
        ↓
Adiciona ao carrinho
        ↓
Confirma o pedido
        ↓
Backend valida preço, estoque e proprietário
        ↓
Pedido é persistido e estoque diminui
        ↓
WhatsApp do feirante abre com código, itens e total
        ↓
Feirante aceita, prepara e conclui o atendimento
```

Regras de negócio:

- Um pedido contém itens de apenas um feirante por vez.
- Preço e total são calculados no backend.
- O estoque baixa na confirmação do pedido, não na conclusão.
- Ao atingir zero, o produto deixa de estar disponível.
- Não existe pagamento online: retirada e pagamento são combinados pelo WhatsApp.

## Categorias iniciais

O Strapi cria automaticamente estas categorias:

- Frutas e hortaliças
- Roupas e acessórios
- Alimentos preparados
- Bebidas
- Artesanato

O administrador pode criar mais categorias no painel Strapi.

## Perfil e fotos

O atalho **Perfil** fica no cabeçalho para usuários autenticados.

- Consumidor: nome, cidade e foto.
- Feirante: dados pessoais, foto, nome da banca, descrição, cidade comercial e WhatsApp.
- A barra de progresso mostra o quanto do perfil foi preenchido.
- As fotos são armazenadas pelo Upload do Strapi; não ficam apenas no navegador.

## Área administrativa

Use `http://localhost:1337/admin` para moderar feirantes e produtos, criar categorias, consultar usuários/pedidos e gerenciar mídias.

Não crie administradores pelo formulário público da Feira Digital.

## Segurança

- Catálogo, categorias e feirantes publicados são públicos.
- Escritas de produtos, perfis e pedidos exigem autenticação.
- O backend valida propriedade de produtos e pedidos.
- Consumidores consultam somente os próprios pedidos.
- Preço, estoque e transições de status são validados no servidor.
- O WhatsApp não entra nas respostas públicas do catálogo.

## Comandos úteis

| Comando | Finalidade |
| --- | --- |
| `npm run dev:api` | Inicia o Strapi em desenvolvimento. |
| `npm run dev` | Inicia o frontend Vite. |
| `npm run typecheck` | Verifica os tipos do frontend. |
| `npm run lint` | Executa o lint do frontend. |
| `npm run test` | Executa testes do backend. |
| `npm run build` | Gera builds de produção. |

Após alterar schemas ou rotas do Strapi, pare e inicie novamente `npm run dev:api`.

## Solução de problemas

### Página abre em 5174 com erro 426

Use `http://localhost:5173`.

### API retorna `403 Forbidden`

Confira se o Strapi está em execução, saia e entre novamente. Para publicar produtos, a conta precisa ser de feirante.

### Campo novo ou página de Perfil não aparece

Reinicie o backend:

```bash
npm run dev:api
```

### Frontend não atualiza

Use `Ctrl + Shift + R`. Se necessário, inicie novamente:

```bash
npm run dev
```

### Porta 5173 ocupada

Provavelmente já existe um Vite rodando. Reutilize a aba já aberta em vez de iniciar outro processo.

## Limitações conhecidas

- Não há gateway de pagamento.
- O WhatsApp abre a conversa preenchida, mas o envio depende da confirmação da pessoa no WhatsApp.
- Administração global ocorre no painel nativo do Strapi.
- SQLite é indicado para desenvolvimento e demonstração; para produção, use um banco e armazenamento de mídia adequados.

## Equipe

- Alfredo Borges do Nascimento Neto — Redes de Computadores.
- Francisco Lucas Gomes Almeida — Engenharia de Software.
- Ryan Lopes Braga Brito — Engenharia de Software.
