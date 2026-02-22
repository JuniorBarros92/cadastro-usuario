# React + Vite

Cadastro de Usuários — Portfolio React

Pequeno projeto em React + Vite que implementa um formulário de cadastro de usuários (nome, e-mail e idade) e exibe a lista de usuários criada em memória. Ideal para estudos e demonstração de componentes React simples.

## Funcionalidades

- Formulário para cadastrar usuários (nome, e-mail, idade)
- Lista de usuários exibida em cards responsivos (`UserCard`)
- Estilização com CSS simples (arquivos em `src/`)

## Requisitos

- Node.js 16+ recomendado
- npm ou yarn

## Scripts úteis

- `npm run dev` — inicia o servidor de desenvolvimento (Vite)
- `npm run build` — gera a build de produção
- `npm run preview` — pré-visualiza a build gerada

## Como rodar localmente

1. Instale dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra o endereço mostrado no terminal (normalmente http://localhost:5173).

## Estrutura principal do projeto

- `src/App.jsx` — componente principal com o formulário de cadastro
- `src/components/UserCard.jsx` — componente de apresentação do usuário
- `src/App.css`, `src/components/UserCard.css`, `src/styles/global.css` — estilos
- `src/main.jsx` — ponto de entrada React

