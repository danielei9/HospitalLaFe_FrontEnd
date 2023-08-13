import paho.mqtt.client as paho
from  mqtt_credentials import *
import json 

class MqttConnection:
    def __init__(self, credentials: MqttCredentials):
        self.request_adapted = ''
        self.request_pendent = False
        self.credentials = credentials
        self.clt = paho.Client(client_id=self.credentials.client_id, reconnect_on_failure =True)

    def initialize(self):
        try:
            self.clt.username_pw_set(username=self.credentials.username, password=self.credentials.password)
            self.clt.connect(self.credentials.broker, int(self.credentials.port))
        except:
            print("connection failed")
            print("Try to reconnect")
            self.initialize()

    def create_loop_mqtt_receive(self, adapt_request):
        def on_message(client, userdata, message):
                incoming_str = str(message.payload.decode("iso-8859-1"))
                incoming_str = incoming_str.replace("\'", "\"")
                print("\nMQTT RECEIVED: \n", incoming_str, '\n')
                self.request_adapted = adapt_request(json.loads(incoming_str))
                # print("ADAPTED")
        self.clt.on_message = on_message
        self.initialize()
        try:
            self.clt.loop_start()
            print("** Subscribing... " + self.credentials.topic + "/tx" )
            self.clt.subscribe(self.credentials.topic+"/tx")
            print("Subscribed OK")
        except:
            raise("subscribe Failed")

    def close(self):
        self.clt.loop_stop()
        self.clt.disconnect()