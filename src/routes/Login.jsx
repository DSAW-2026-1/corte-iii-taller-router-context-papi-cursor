import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const { isAuthenticated, login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true })
    }
  }, [isAuthenticated, from, navigate])

  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const username = data.get('username') || 'Invitado'
    login({ username })
    navigate(from, { replace: true })
  }

  return (
    <div className="page card">
      <h2>Login</h2>
      <p>Por favor ingresa para ver Home y About.</p>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Usuario
          <input type="text" name="username" placeholder="ej. user" required />
        </label>
        <label>
          Contraseña
          <input type="password" name="password" placeholder="••••••" required />
        </label>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  )
}
