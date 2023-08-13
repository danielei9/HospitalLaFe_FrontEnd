import { ENV } from "../utils";


export default function authHeader() {
    const token = JSON.parse(localStorage.getItem(ENV.JWT.ACCESS));
    if (token) {
        return { 'x-access-token': token};
    } else {
      return {};
    }
}