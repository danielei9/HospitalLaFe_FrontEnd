import { ENV } from "../utils";
import { useAuth } from "../Hooks/index";

export class User {
  
  async getAll(accessToken) {
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.USER}`;
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": accessToken,
      },
    };
    const response = await fetch(url, params);
    const result = await response.json();
    console.log(result)

    if (response.status !== 200) throw result;

    return result;
  }

  async getOne(data) {
    let id =""
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.USER}/${id}`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authentication": "poner tag jwt",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, params);
    const result = await response.json();

    if (response.status !== 200) throw result;

    return result;
  }

  async postOne(data) {
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.USER}/`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "poner tag jwt",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, params);
    const result = await response.json();

    if (response.status !== 200) throw result;

    return result;
  }

  async putOne(data) {
    let id =""
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.USER}/${id}`;
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authentication": "poner tag jwt",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, params);
    const result = await response.json();

    if (response.status !== 200) throw result;

    return result;
  }

async deleteOne(data) {
  let id =""
  const url = `${ENV.BASE_API}/${ENV.API_ROUTES.USER}/${id}`;
  const params = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authentication": "poner tag jwt",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(url, params);
  const result = await response.json();

  if (response.status !== 200) throw result;

  return result;
}
}
