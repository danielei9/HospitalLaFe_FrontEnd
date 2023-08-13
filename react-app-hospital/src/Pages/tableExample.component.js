import React, { Component, useEffect, useState } from 'react'
import '../styles/App.css'
import Table from "../components/Table/index";
import styles from "../components/Table/Table.module.css";
import {data} from "../data/DB";
import { Input, Space } from 'antd';

const { Search } = Input;
export default function TableExample(props) {
  const [countries] = useState([...data]);

  return (
  <div className={styles.wrapper}>
      <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      style={{"padding":"2vh"}}
      // onSearch={onSearch}
    />
    <Table data={countries} rowsPerPage={15} />
  </div>
  )
}

