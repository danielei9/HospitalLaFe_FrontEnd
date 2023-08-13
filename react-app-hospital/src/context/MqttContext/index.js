import React, { createContext, useEffect, useState } from 'react';
import { Client } from 'paho-mqtt';

const MQTTContext = createContext();

export const MQTTProvider = ({ children }) => {
    // const [message, setMessage] = useState('');
    const [mqttConnectionState, setMqttConnectionState] = useState('');
    const broker = 'broker.hivemq.com';
    const port = 8000;
    const clientId = String(Math.floor(Math.random() * 9000000000) + 1000000000);
    const client = new Client(broker, port, clientId);

    console.log('Conectando al broker MQTT');
    client.connect({
        onSuccess: () => {
            setMqttConnectionState("Connected");
            console.log('Connected to MQTT broker');
            // Perform any additional setup or subscription logic here
        },
        onFailure: (errorMessage) => {
            console.log('Failed to connect:', errorMessage.errorMessage);
            setMqttConnectionState("Fail: " + String(errorMessage.errorMessage));
        },
    });

    useEffect(() => {
        client.onConnectionLost = (responseObject) => {
            if (responseObject.errorCode !== 0) {
                console.log('Connection lost:', responseObject.errorMessage);
                setMqttConnectionState("Connection lost: " + String(responseObject.errorMessage));
            }
        };

        client.onMessageArrived = (message) => {
            console.log('Message arrived:', message.payloadString);
        };

        // Desconexión del cliente MQTT al desmontar el componente
        return () => {
            client.disconnect();
        };
    }, []);

    const cbProcessArrivedMessage = () => {
    }

    const handlePublish = (topic, formData) => {
        const message = {typeRequest:0,data:formData}
        // Publicación del mensaje en el tema
        client.publish(topic, JSON.stringify(message,null,3));
        console.log(`Mensaje publicado en el tema topic1: ${message}`);
    };

    const contextValue = {
        // message,
        // setMessage,
        handlePublish,
    };

    return (
        <MQTTContext.Provider value={contextValue}>
            {children}
        </MQTTContext.Provider>
    );
};

export default MQTTContext;