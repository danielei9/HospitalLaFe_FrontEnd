import { ENV } from "../utils";

export class Auth {
  async register(data) {
    console.log("register")
    console.log(data)
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.REGISTER}`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, params);
    const result = await response.json();

    if (response.status !== 201) throw result;

    return result;
  }

  async login(data) {
    const url = `${ENV.BASE_API }/${ENV.API_ROUTES.LOGIN}`;
    // console.log(data)
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    if (response.status !== 200) throw result;

    return result;
  }

  async refreshToken(token) {
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.REFRESH_TOKEN}/`;
    const params = {
      method: "POST",
      headers: {
        "x-access-token":token,
        "Content-Type": "application/json",
      },
      //body: JSON.stringify({ refresh: token }),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    // console.debug("Result", result)
    if (response.status !== 200) throw result;
    return result;
  }
}
