# Projeto do NLW*return*

### Passos iniciais

1. Instalar o NodeJS via package manager
2. Se utilizando o vsCode instalar as extensões tailwind CSS intellisense
3. Criar uma pasta para armazenar o projeto.
4. Utilizar o comando `npm create vite@latest`

   1. Escolha o nome do projeto, ex: 'web'
   2. Selecione o framework 'react'
   3. Selecione a variante 'react-ts'
5. Navegue até a pasta da aplicação, ex: caso o nome do projeto seja 'web' `cd web`
6. Rode o comando `npm install`
7. Instale o tailwindCSS -> [site oficial](https://https://tailwindcss.com/docs/installation/using-postcss)
   `npm install -D tailwind CSS postcss autoprefixer`
   `npx tailwind CSS init`
8. Instale o plugin @tailwindcss/forms -> [site oficial](https://github.com/tailwindlabs/tailwindcss-forms)
   `npm install -D @tailwindcss/forms`
9. Instale o plugin tailwind-scrollbar
   `npm install --save-dev tailwind-scrollbar`
10. No arquivo `tailwind.config.js` adicione os plugins

```
   // tailwind.config.js
   module.exports = {
      theme: {
      // ...
      },
      plugins: [
         require('@tailwindcss/forms'),
         require('tailwind-scrollbar'),
      // ...
      ],
   }
```

11. Instale o phosphor icons -> [site oficial](https://phosphoricons.com/)

    > `npm install --save phosphor-react`
    >
12. Instale o headless UI -> [site oficial](https://headlessui.dev/)

    > `npm install @headlessui/react`
    >
13. Utilize os comandos git para salvar as configurações iniciais

    > `git init`
    > `git branch -m master main`
    > `git add .`
    > `git commit -m "cria setup inicial" -m "cria um projeto react-ts com vite, instala tailwind CSS, phosphor icons e headless UI"`
    >
