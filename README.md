# Proyecto tenpo

Hola este proyecto se usaron las siguientes tecnologias:

- Node v.22
- React
- Vite js
- Axios
- faker js
- msw
- React Router
- tailwind css
- vitest

---

**IMPORTANTE**

para la autenticacion (login) puedes usar cualquier email y cualquier password

---

si deseas correr el proyecto con el comando

```bash
npm run dev
```

## Estructura de carpetas

<details>
  <summary>click para ver la estructura completa</summary>
  
```bash
.
├── eslint.config.js
├── file-structure.txt
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── mockServiceWorker.js
│   └── vite.svg
├── README.md
├── src
│   ├── App.tsx
│   ├── application
│   │   ├── config
│   │   │   └── index.ts
│   │   └── useCase
│   │       ├── GenerateFakeJWT
│   │       │   └── index.ts
│   │       └── PermissionsRouter
│   │           ├── index.ts
│   │           ├── isAuthenticated.tsx
│   │           ├── ProtectedRoute.tsx
│   │           └── PublicRouter.tsx
│   ├── entities
│   │   ├── RowRendered.ts
│   │   └── Users.ts
│   ├── index.css
│   ├── infrastructure
│   │   ├── api
│   │   │   ├── auth
│   │   │   │   ├── auth.ts
│   │   │   │   └── index.ts
│   │   │   └── browser
│   │   │       └── index.ts
│   │   ├── axios
│   │   │   └── index.ts
│   │   └── Router
│   │       ├── provider.tsx
│   │       └── router.tsx
│   ├── main.tsx
│   ├── presentation
│   │   ├── assets
│   │   │   ├── logo.jpeg
│   │   │   └── react.svg
│   │   ├── components
│   │   │   ├── icons
│   │   │   │   ├── FaFacebook.tsx
│   │   │   │   ├── FaInstagram.tsx
│   │   │   │   ├── FaLinkedin.tsx
│   │   │   │   ├── FaTwitter.tsx
│   │   │   │   └── index.tsx
│   │   │   ├── Layout
│   │   │   │   ├── Footer
│   │   │   │   │   ├── Footer.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Layout.tsx
│   │   │   │   └── Navbar
│   │   │   │       ├── index.ts
│   │   │   │       └── Navbar.tsx
│   │   │   ├── rowRender
│   │   │   │   ├── index.ts
│   │   │   │   └── rowRender.tsx
│   │   │   └── UserList
│   │   │       ├── index.ts
│   │   │       └── UserList.tsx
│   │   └── screens
│   │       ├── Home
│   │       │   ├── Home.tsx
│   │       │   └── index.ts
│   │       └── Login
│   │           ├── index.ts
│   │           └── Login.tsx
│   └── vite-env.d.ts
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

27 directories, 52 files

````

</details>

---

- Puedes ver la estructura completa en el archivo `file-structure.txt`

- **_public_** : uso para archivos globales
- **_src_** : codigo y logica del proyecto
  - **_application_** : Alguna logica de negocio en donde se le pueden llamar casos de uso.
  - **_entities_** : manejo de tipos como interfaces o types.
  - **_Infrastructure_** : comunicacion con APIs externas o herramientas externas como axios.
  - **_Presentation_** : Donde estan los componentes reutilizables, paginas y estilos.

  ## Arquitectura

Implementacion de Clean Architecture para separar por capaz.

- Aplication
- Infrastructure
- Presentation
- Entities

## Pruebas Unitarias

con el siguiente comando puedes ver las pruebas unitarias.

Utilice vitest para hacer las pruebas

```bash
 npm run test
````

## Deploy

- vercel
