import { Link } from 'react-router-dom'
import { useAuth } from "../Hooks/index";

function NavBar() {
  const { isAuthenticated, user , logout} = useAuth();
  console.log(user)
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={'/'}>
          Hospital
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
           
            {
              isAuthenticated ?
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/sign-up'}>
                      Crear Usuario
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/algorithm'}>
                      Algoritmo                  </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/admin'}>
                      Administrador
                    </Link>
                  </li>
                  <li className="nav-item">
                <Link className="nav-link" onClick={logout}>
                  Cerrar Sesión
                </Link>
              </li>
                </>
                :
                <li className="nav-item">
                <Link className="nav-link" to={'/sign-in'}>
                  Login
                </Link>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default NavBar