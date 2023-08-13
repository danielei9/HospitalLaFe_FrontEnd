import { createContext, useContext, useEffect, useState } from 'react';
import jwtDecode from "jwt-decode";
import { jwt, Auth } from "../../API";
const authApi = new Auth();

export const AuthContext = createContext({
  isAuthenticated: null,
  accessToken: null,
  user: null,
  login: () => null,
  logout: () => null,
});

export function AuthProvider({ children }) {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    // Verificar si el usuario
    // está autenticado y obtener información del usuario
    const fetchUser = async () => {
      try {
          console.log("Getting User JWT...")
          const response = await jwt.getTokens();
        console.log(response);
        const user = await jwtDecode(response.accessToken);
        console.log(user);
        setUser(user);
        setIsAuthenticated(true);
        setAccessToken(response.accessToken);

      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    fetchUser();
  }, []);

  const login = async (data) => {
    // API para iniciar sesión
  
    try {
      const response = await authApi.login(data);
      console.log("loggingCredentials")
      console.log(response)
      jwt.saveTokens(response.token)
      const decodeToken = jwtDecode(response.token);
      console.log("decodeToken")
      console.log(decodeToken)
      if (decodeToken)
        setIsAuthenticated(true);
      console.log("Ya tiene el token");
      console.log(decodeToken);
      setUser(decodeToken);
      // navigate("../")

      console.log("LOGIN OK")
      } catch (error) {
      setIsAuthenticated(false);
      console.log("LOGIN ERROR: ", error.message)

    }
  };

  const logout = () => {
    // Aquí puedes llamar a una API para cerrar sesión
    console.log("LOGOUT!")
    setUser(null);
    setIsAuthenticated(false);
    setAccessToken(null);
    setAccessToken(null);
    jwt.removeTokens();

  };
  const data = {
    isAuthenticated,
    accessToken,
    user,
    logout,
    login,
  };
  return (
    <AuthContext.Provider
      value={data}
    >
      {children}
    </AuthContext.Provider>
  );
}