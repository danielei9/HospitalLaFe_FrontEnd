
import http from "../http-common";
import authHeader from './auth-header.service';
import { ENV } from "../utils";

class UsersService {

    getAllUsers() {
        return http.get(`${ENV.API_ROUTES.USER}/`, {headers: authHeader()} );
    }
    getUserById(id) {
        return http.get(`${ENV.API_ROUTES.USER}/${id}`, {headers: authHeader()});
    }
    addUser(data) {
        return http.post(`${ENV.API_ROUTES.USER}`, data, {headers: authHeader()});
    }
    editUserById(id, data) {
        return http.put(`${ENV.API_ROUTES.USER}/${id}`, data, {headers: authHeader()});
    }
    deleteUserById(id) {
        return http.delete(`${ENV.API_ROUTES.USER}/${id}`, {headers: authHeader()});
    }
}
export default new UsersService();