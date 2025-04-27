# React + TypeScript + Vite

## Como Rodar o Projeto, vamo lá

Tu precisa ter o **Node.js** instalado a princípio  
Veja se tá baixado com esse comando no bash (vai que não tem, né?):  
**node -v**

Se não tiver, tem que instalar o **npm** também, se não tiver:  
**npm -v**

Aqui estão os links para tentar instalar caso não tenha:

- [Node.js](https://nodejs.org/pt)
- [Documentação do npm](https://docs.npmjs.com/getting-started)

Esses são os links para instalar, caso necessário.

### Para rodar o projeto agora

Clone esse repositório no terminal do teu VSCode (eu uso o bash para garantir, né?):

```bash
git clone https://github.com/RKaito/ReactFAG.git
```

Navegue pra pasta ques estiver esse projeto no teu pc com o comando "cd":
cd ReactFAG

e rode um:
npm install

depois de instalar as dependências com o comando "npm install":
npm run dev

de um ctrl+click na url ou jogue essa url no launch.json (pasta .vscode):
"configurations": [
{
"type": "chrome",
"request": "launch",
"name": "Launch Chrome against localhost",
"url": "http://localhost:5174/",
"webRoot": "${workspaceFolder}"
}
]

Então rodando o projeto você poderá buscar pelos usuários do github com base em seu nome de usuário
