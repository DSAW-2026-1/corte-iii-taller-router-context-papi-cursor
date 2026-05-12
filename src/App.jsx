import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  useLocation,
} from 'react-router-dom'
import Login from './routes/Login.jsx'
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'

function RequireAuth({ isAuthenticated, children }) {
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function handleLogin() {
    setIsAuthenticated(true)
  }

  function handleLogout() {
    setIsAuthenticated(false)
  }

  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="app-header">
          <h1>React Router demo</h1>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
            {isAuthenticated && (
              <button className="link-button" onClick={handleLogout}>
                Logout
              </button>
            )}
          </nav>
        </header>

        <main className="app-content">
          <Routes>
            <Route
              path="/"
              element={
                <RequireAuth isAuthenticated={isAuthenticated}>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/about"
              element={
                <RequireAuth isAuthenticated={isAuthenticated}>
                  <About />
                </RequireAuth>
              }
            />
            <Route
              path="/login"
              element={
                <Login
                  isAuthenticated={isAuthenticated}
                  onLogin={handleLogin}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
