#!/usr/bin/python
import serial
import time
# import argparse

def removeComment(string):
	if (string.find(';')==-1):
		return string
	else:
		return string[:string.index(';')]

def startMachine(type):
	port= "/dev/ttyUSB0"
	file = "/home/pi/Desktop/HospitalLaFe_FrontEnd/gcode_explain.txt"
	## show values ##
	print( "USB Port: %s" % port )
	print( "Gcode file: %s" % file )
	
	# Open serial port
	s = serial.Serial(port,115200)
	print( 'Opening Serial Port')
	
	# Open g-code file
	#f = open('/media/UNTITLED/shoulder.g','r');
	f = open(file,'r')
	print( ('Opening gcode file'))
	
	# Wake up
	s.write(str("\r\n\r\n").encode()) # Hit enter a few times to wake the print(rbot
	time.sleep(2)   # Wait for print(rbot to initialize
	s.flushInput()  # Flush startup text in serial input
	print( 'Sending gcode')
	
	# Stream g-code
	for line in f:
		l = removeComment(line)
		l = l.strip() # Strip all EOL characters for streaming
		if  (l.isspace()==False and len(l)>0) :
			print( 'Sending: ' + l)
			s.write((str(str(l )+ '\n')).encode()) # Hit enter a few times to wake the print(rbot
			grbl_out = s.readline() # Wait for response with carriage return
			print( ' : ' + str(grbl_out.strip()))
	
	# Wait here until print(ing is finished to close serial port and file.
	#raw_input("  Press <Enter> to exit.")
	
	# Close file and serial port
	f.close()
	s.close()