import React, { Component, useEffect, useState } from 'react'
import '../styles/App.css'
import { useAuth } from "../Hooks/index";
import { getAllUsers } from '../Logic/user';
import { Input, Space } from 'antd';
import $ from 'jquery';
const { Search } = Input;

// import { FontAwesomeIcon } from "@fortawesome/fontawesome"

export default function AdminPanel(props) {
  const { isAuthenticated, accessToken, user } = useAuth();
  const [users, setUsers] = useState([])
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);

  function handleDelete(){
    
  }

  function handleEdit(){
    
  }
  function putUserInTable() {
    return (
      // searchResults?.map(item => (
        filteredData?.map((item, index) => (
        <tr>
          <th scope="row" key={index}>{index}</th>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.createdAt}</td>
          <td>
          {/* <FontAwesomeIcon icon={faTrashAlt} className="delete-button" onClick={handleDelete} />
          <FontAwesomeIcon icon={faEdit} className="edit-button" onClick={handleEdit} /> */}
          </td>
        </tr>
      ))
    );
  }
  function handleSearch(text) {
    console.log(text)
    setSearchText(text);
  }

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  useEffect(() => {
    getUsers();

  }, [])

  const getUsers = async () => {
    setData(await getAllUsers(accessToken))
    console.log("users")
    console.log(users)
  }

  if (isAuthenticated) {
    return (
      <div className="container-fluid" style={{ marginTop: 90, maxWidth: 1400, backgroundColor: "#fff", borderRadius: 10 }}>
        <div className="row" style={{ padding: 20, paddingBottom: 0 }}>
          <div className="container">
            <h3>Usuario actual</h3>
            <div className="col">
              <div className="mb-3">
                <div className="row" style={{ padding: 20 }}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Alias</th>
                        <th scope="col">Opciones</th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr>
                        {
                          props.value ? <>
                            <td><input type="text" className="form-control" value={user.name} /></td>
                            <td><input type="text" className="form-control" value={user.name} /></td>
                            <td><input type="text" className="form-control" value={user.name} /></td>
                            <td><input type="text" className="form-control" value={user.name} /></td>
                          </> : <>
                            <td>{user.email}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                              <button className="btn btn-primary" onClick={() => { props.value = !props.value; console.log(props.value) }}>
                                Editar
                              </button>
                              {/* <button className="btn btn-danger" onClick={() => { props.value = !props.value; console.log(props.value) }}>
                                Eliminar
                              </button> */}
                            </td>
                          </>
                        }
                      </tr>
                    </tbody>
                  </table>                                    </div>
              </div>
            </div>

            <h3>Panel de Administrador</h3>
            <div className="row" style={{ marginTop: 30 }}>
              <div className="col">
                <div className="mb-3">
                  <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    style={{ "padding": "1vh" }}
                    onChange={(e) => handleSearch(e.target.value)} />

                  <div className="row" style={{ padding: 20 }}>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Nombre</th>
                          <th scope="col">Correo</th>
                          <th scope="col">Alias</th>
                          <th scope="col">Fecha de creación</th>
                          <th scope="col">Opciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {putUserInTable()}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  else
    return
}

