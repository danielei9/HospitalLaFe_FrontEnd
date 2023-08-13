import React, { Component, useEffect, useState } from 'react'
import '../styles/App.css'
import Table from "../components/Table/index";
import styles from "../components/Table/Table.module.css";
// import {data} from "../data/DB";
import { Input, Space } from 'antd';
import $ from 'jquery';
import { useAuth } from "../Hooks/index";

const { Search } = Input;

export default function TableExample(props) {
  const [data, setData] = useState([]);
  const { isAuthenticated, accessToken } = useAuth();
  const [searchText, setSearchText] = useState('');

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
    $.ajax({
      url: 'http://127.0.0.1:7878/measure',
      type: 'GET',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', accessToken);
      }, success: function (r) {
        // Handle data
        // setObjArray(data);
        setData(r)
        console.log(data)
      }
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        style={{ "padding": "1vh" }}
        onChange={(e) => handleSearch(e.target.value)}     />
      <Table data={filteredData} rowsPerPage={15} />
    </div>
  )
}

