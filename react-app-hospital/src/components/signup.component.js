import { Component } from 'react'
import React from 'react'
import { useAuth } from "../Hooks/index";
import { useFormik } from "formik";
import { Auth } from "../API/auth";
import { initialValues } from "../auth/AuthPage/NewUser.data";

export default function SignUp(props) {
  const { isAuthenticated } = useAuth();
  const authApi = new Auth();

  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: async (values) => {
       alert(JSON.stringify(values, null, 2));
      try {
        await authApi.register(values)
        return;
      } catch (error) {
        console.error(error);
      }
    },
  })

  if (isAuthenticated) {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={formik.handleSubmit}>
            <h3>Crear Usuario</h3>
            <div className="mb-3">
              <label>Nombre y apellidos</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control"
                placeholder="Introduzca Nombre"
                onChange={formik.handleChange}
                // value={formik.values.username}
                errormessage={formik.errors.username}
              />
            </div>
            <div className="mb-3">
              <label>Alias</label>
              <input
                id="username"
                name="username"
                type="text"
                className="form-control"
                placeholder="Introduzca alias"
                onChange={formik.handleChange}
                // value={formik.values.username}
                errormessage={formik.errors.username}
              />
            </div>
            <div className="mb-3">
              <label>Email </label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={formik.handleChange}
                // value={formik.values.username}
                errormessage={formik.errors.username}
              />
            </div>
            <div className="mb-3">
              <label>Contraseña</label>
            <input
            id='password'
              name="password"
              type="password"
              className="form-control"
              placeholder="Introduzca contraseña"
              onChange={formik.handleChange}
              // value={formik.values.pswd}
              errormessage={formik.errors.pswd}
            />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
  else
    return
}
