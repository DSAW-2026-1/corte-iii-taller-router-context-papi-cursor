import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  useLocation,
} from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext.jsx'
import Login from './routes/Login.jsx'
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'

function RequireAuth({ children }) {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

function AppLayout() {
  const { isAuthenticated, logout, user } = useAuth()

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>React Router demo</h1>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {!isAuthenticated && <Link to="/login">Login</Link>}
          {isAuthenticated && (
            <>
              <span className="nav-user">Hola, {user.username}</span>
              <button className="link-button" onClick={logout}>
                Logout
              </button>
            </>
          )}
        </nav>
      </header>

      <main className="app-content">
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/about"
            element={
              <RequireAuth>
                <About />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    </BrowserRouter>
  )
}
