import { useState, useEffect, createContext } from "react";
import jwtDecode from "jwt-decode";
import { jwt, Auth } from "../../API";

const authController = new Auth();

export const AuthContext = createContext({
  auth: null,
  accessToken: null,
  refreshToken: null,
  login: () => null,
  logout: () => null,
});

export function AuthProvider(props) {
  const { children } = props;

  const [auth, setAuth] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  

  const logout = () => {
    // console.log("estamos context logout!")
    // setAuth(null);
    // setAccessToken(null);
    // setRefreshToken(null);
    // jwt.removeTokens();
  };

  const login = (response) => {

    console.log("estamos context login!")
    console.log(response);

    if (response.accessToken /* && response.refreshToken*/) {
      const decodeToken = jwtDecode(response.token);
      if (decodeToken)
        setAuth(true);
      console.log("Ya tiene el token");
      console.log(auth);
      setAccessToken(response.accessToken);
      // setRefreshToken(response.refreshToken);
      // FIXME: revisar refreshToken en el server
      jwt.saveTokens(response.accessToken);
      return true
    } else {
      logout();
      return false
    }
  };
  const data = {
    auth,
    accessToken,
    refreshToken,
    logout,
    login,
  };

  // if (auth === undefined) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
