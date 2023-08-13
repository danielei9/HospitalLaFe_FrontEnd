import React, { useState } from "react";

import useTable from "../../Hooks/useTable";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";

const Measures = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>Name</th>
            <th className={styles.tableHeader}>Surname</th>
            <th className={styles.tableHeader}>State</th>
            <th className={styles.tableHeader}>DNI</th>
            <th className={styles.tableHeader}>Data</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((measure,index) => (
            <tr  key={index} className={styles.tableRowItems} >
              <td className={styles.tableCell}>{measure.name}</td>
              <td className={styles.tableCell}>{measure.surname}</td>
              <td className={styles.tableCell}>{measure.state}</td>
              <td className={styles.tableCell}>{measure.dni}</td>
              <td className={styles.tableCell}>{measure.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default Measures;
