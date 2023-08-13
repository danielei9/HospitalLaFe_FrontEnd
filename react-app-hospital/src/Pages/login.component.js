import React, { Component } from 'react'
import '../styles/App.css'
import { useFormik } from "formik";
import { initialValues } from "../auth/AuthPage/Login.data";
import { useAuth } from "../Hooks";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';


export function LoginPage(props) {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      try {
        console.log("LOGIN")
        login(values)
        if (isAuthenticated)
          navigate("../");
        return;
      } catch (error) {
        console.error(error);
      }
    },
  })
  return (

      <div className="auth-wrapper">
        <div className="auth-inner">

          <form onSubmit={formik.handleSubmit}>
            <img src={logo} width="300" style={{ "padding": "30px" }} alt="LOGO GESINEN"></img>

            <div className="mb-3">
              <label>Email address</label>
              <input
                id="username"
                name="username"
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={formik.handleChange}
                // value={formik.values.username}
                errormessage={formik.errors.username}
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                id='pswd'
                name="pswd"
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={formik.handleChange}
                // value={formik.values.pswd}
                errormessage={formik.errors.pswd}
              />
            </div>

            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
  )
}
