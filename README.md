# React Router Login Example

Ejemplo mínimo de React + React Router con flujo de login, Home y About.

## Comandos

- `npm install`
- `npm run dev`

## Estructura

- `src/App.jsx` - router principal y control de autenticación.
- `src/routes/Login.jsx` - formulario de login.
- `src/routes/Home.jsx` - página protegida Home.
- `src/routes/About.jsx` - página protegida About.

## Flujo

- `/login` es la ruta pública.
- `/` y `/about` están protegidas y requieren login.
- Si el usuario no está autenticado, se redirige a `/login`.
- Al iniciar sesión, vuelve a la ruta solicitada.
