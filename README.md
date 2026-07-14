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

# Context en React

## ¿Qué es el Context?

El Context es un mecanismo en React para compartir datos entre componentes sin tener que pasar props manualmente a través de cada nivel del árbol de componentes. Es útil para datos globales como tema, usuario autenticado, idioma, etc.

## ¿Para qué sirve?

Sirve para evitar el "prop drilling" (pasar props a través de múltiples niveles). Permite que componentes profundamente anidados accedan a datos sin que los componentes intermedios tengan que pasarlos explícitamente.

## ¿Qué elementos son necesarios?

- **Context (createContext)**: Crea el objeto de contexto
- **Provider**: Componente que provee el valor del contexto a sus hijos
- **Consumer o useContext**: Forma de consumir/acceder al valor del contexto en componentes hijos

## ¿Cómo se implementa?

### 1. Crear el contexto

```javascript
import { createContext } from 'react';

const MiContexto = createContext(valorPorDefecto);
```

### 2. Proveer el valor

```javascript
function App() {
  const valor = "datos compartidos";
  
  return (
    <MiContexto.Provider value={valor}>
      {children}
    </MiContexto.Provider>
  );
}
```

### 3. Consumir el contexto

```javascript
import { useContext } from 'react';

function ComponenteHijo() {
  const valor = useContext(MiContexto);
  
  return <div>{valor}</div>;
}
```
