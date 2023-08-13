import React, { Component, useState, useEffect, useContext } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.min'
import { useAuth } from "../Hooks/index";
import TableExample from './tableExample.component'
import MQTTContext from '../context/MqttContext';
import { Input, Form } from 'antd';
import FormStartMachine from './formStartMachine.component';

export default function Table() {
    const { isAuthenticated } = useAuth();
    const { handlePublish } = useContext(MQTTContext);
    const [selectedOption, setSelectedOption] = useState('0');
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const startMachine = (data) => {
        handlePublish("hospital/None/tx", data)
    }
    return (
        <div>
            <>
                <div className="container-fluid" style={{ marginTop: 90, maxWidth: 1400, backgroundColor: "#fff", borderRadius: 10 }}>
                    <div className="row" style={{ padding: 20, paddingBottom: 0 }}>
                        <h1 style={styles.tittle}>Control de Máquina</h1>
                        <div className="" style={{ textAalign: "center" }}>

                            <h5> Introduzca datos de muestras </h5>
                            <FormStartMachine startMachine={startMachine} />

                        </div>
                       
                    </div>
                </div>
                <div className="container-fluid" style={{ paddingTop: '2vh', marginTop: '2vh', maxWidth: 1400, backgroundColor: "#fff", borderRadius: 10 }}>
                    <h1>Muestras</h1>
                    <TableExample />
                </div>
            </>
            :
            <></>
        </div >
    )
}

const styles = {
  tittle: {
      paddingBottom: "4vh",
  },
};