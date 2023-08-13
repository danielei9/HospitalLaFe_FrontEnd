from MqttController import *
from mqtt_credentials import *
from hospiPython import *

class Service():
    def __init__(self):
        self.status = 0
        self.mqttCredentials = MqttCredentials("broker.hivemq.com","","",1883)
        # self.mqttCredentials = MqttCredentials("192.168.4.1","ysolve","ysolve2022",1883)
        self.mqttController = MqttConnection(self.mqttCredentials)
        self.mqttController.create_loop_mqtt_receive(self.processRequest)
        self.actualData = {
      "name": "not-provided",
      "surname": "not-provided",
      "state": "not-provided",
      "dni": "not-provided",
      "selectedOption": "not-provided"
   }
    """
    Type Request ServiceMachine
    {
        "typeRequest": 0,
        "data": {
            "name": "asd",
            "surname": "ads",
            "state": "ads",
            "dni": "da",
            "selectedOption": "8"
        }
    }
    
    Type Request Measure
    {"type":1, "data":{"quantity": 8}}
    """

    def processRequest(self,request):
        if(request["typeRequest"] == 0):
            ## Iniciar Machine
            self.actualData = request["data"]
            # startMachine(request["data"]["quantity"])
            print("startMachine")
        if(request["typeRequest"] == 1):
            ## Procesar la request y hacer una peticion al servidor para almacenar la medida
            pass

service = Service()

while (service.status == 0):
    pass