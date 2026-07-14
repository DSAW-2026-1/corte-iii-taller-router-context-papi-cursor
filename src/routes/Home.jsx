import { useAuth } from '../context/AuthContext.jsx'

export default function Home() {
  const { user } = useAuth()

  return (
    <div className="page card">
      <h2>Home</h2>
      <p>Bienvenido, <strong>{user?.username}</strong>. Aquí puedes navegar a About o cerrar sesión.</p>
      <div className="user-info">
        <h3>Datos del usuario (desde Context)</h3>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  )
}
