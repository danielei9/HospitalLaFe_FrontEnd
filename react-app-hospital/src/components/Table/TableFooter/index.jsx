import React, { useEffect } from "react";
import { Pagination } from "antd";
import styles from "./TableFooter.module.css";


//TODO: Revisar pagination
const TableFooter = ({ range, setPage, page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <div >
      <Pagination
        total={range.length}
        showSizeChanger
        showQuickJumper
        showTotal={(total) => `Total ${total} items`}
        onChange={setPage}
      style={{"color":"white","margin":"2vh"}}
      />
    </div>
  );
};

export default TableFooter;
