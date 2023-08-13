import React, { Component } from 'react'
import '../styles/App.css'
import { useAuth } from "../Hooks/index";

export default function EditAlgorithm() {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Editar Parámetros Algoritmo</h3>
            <div className="mb-3">
              <label>VarA</label>
              <input
                type="text"
                className="form-control"
                placeholder="VarA"
              />
            </div>

            <div className="mb-3">
              <label>VarB</label>
              <input type="text" className="form-control" placeholder="VarB" />
            </div>

            <div className="mb-3">
              <label>VarC</label>
              <input
                type="text"
                className="form-control"
                placeholder="VarC"
              />
            </div>


            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Sign Up
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
