import { useAuth } from '../context/AuthContext.jsx'

export default function About() {
  const { user } = useAuth()

  return (
    <div className="page card">
      <h2>About</h2>
      <p>Esta es una página de ejemplo para demostrar el enrutamiento con React Router y Context API.</p>
      <div className="user-info">
        <h3>Sesión activa (desde Context)</h3>
        <p>Usuario: <strong>{user?.username}</strong></p>
      </div>
    </div>
  )
}
