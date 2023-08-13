import { ENV } from "../utils";

export class Measure {
  async getAll(data) {
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.MEASURE}`;
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authentication": "poner tag jwt",
      },
    };

    const response = await fetch(url, params);
    const result = await response.json();

    if (response.status !== 200) throw result;

    return result;
  }

  async getOne(data) {
    let id =""
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.MEASURE}/${id}`;
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
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.MEASURE}/`;
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

  async putOne(data) {
    let id =""
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.MEASURE}/${id}`;
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
  const url = `${ENV.BASE_API}/${ENV.API_ROUTES.MEASURE}/${id}`;
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
