
import http from "../http-common";
import authHeader from './auth-header.service';
import { ENV } from "../utils";

class AuthService {

    register() {
        return http.get(`${ENV.API_ROUTES.REGISTER}/`, {headers: authHeader()} );
    }
    login(data) {
        return http.post(`${ENV.API_ROUTES.LOGIN}/`,data, {headers: authHeader()});
    }
  
}
export default new AuthService();