import React, { Component, useState, useEffect, useContext } from 'react'
import { Input, Form } from 'antd';

const FormStartMachine = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        state: '',
        dni: '',
        selectedOption: '8', // Valor inicial del select
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        // console.log("handleInputChange", name, " ", value)
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSelectChange = (event) => {
        const value = event.target.value;
        console.log("CHANGED",value)
        setFormData((prevFormData) => ({
            ...prevFormData,
            selectedOption: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes realizar las acciones necesarias con los datos del formulario (formData)
        console.log(formData);
        props.startMachine(formData)
    };

    const styles = {
        row: {
            display: 'flex',
        },
        tittle: {
            paddingBottom: "4vh",
        },
        column: {
            flex: 1,
            marginRight: '20px', /* Espacio entre columnas */
        },
    };


    return (
        <form style={styles.column} onSubmit={handleSubmit}>
            <div style={styles.row}>
                <div style={styles.column}>
                    <Form.Item label="Nombre">
                        <Input name="name" value={formData.name} onChange={handleInputChange} />
                    </Form.Item>
                    <Form.Item label="Apellido">
                        <Input name="surname" value={formData.surname} onChange={handleInputChange} />
                    </Form.Item>
                </div>
                <div style={styles.column}>
                    <Form.Item label="Estado">
                        <Input name="state" value={formData.state} onChange={handleInputChange} />
                    </Form.Item>
                    <Form.Item label="DNI">
                        <Input name="dni" value={formData.dni} onChange={handleInputChange} />
                    </Form.Item>
                </div>
            </div>
            <div style={styles.column}>
                <Form.Item label="Número de medidas a analizar">
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        name="selectedOption"
                        value={formData.selectedOption}
                        onChange={handleSelectChange}
                    >
                        <option value="8">8</option>
                        <option value="16">16</option>
                        <option value="32">32</option>
                    </select>
                </Form.Item>
            </div>
            <div className="container-fluid" >
                <button type="submit" className="btn btn-primary" style={{ margin: 10, alignSelf: "center", maxWidth: 1000 }}>
                    Iniciar Máquina
                </button>
            </div>    </form>
    );


};

export default FormStartMachine;
