# TypeScript - Study

Autor: Alessandro Schuquel Pedroso

## Configurando o ambiente

- Criar um projeto node.js

```
 npm init --y
 npm i
```

- Instalar typescript como dependência de desenolvimento:

```
npm i -D typescript
```

- Transformando JavaScript em TypeScript, arquivo `tsconfig.json` será gerado.

```
npx tsc --init
```

- Executar o comando abaixo para realizar a transpilação do JavaScript para TypeScript

```
npx tsc
```

- Executar o comando abaixo no terminar para Build

```
node src/index.js
```

- Utilizando o TSX, excluir o arquivo index.js e executar o comando abaixo:

```
npm i -D tsx
```

- No arquivo `package.json` e em `script` criar a propriedade `"dev":"tsx"`

```
  "scripts": {
    "dev": "tsx"
  },
```

- Executar o comando abaixo para realizar o build, pode executar com `yarn` ou `npx`

```
yarn dev src/index.ts

npx tsx src/index.ts
```
