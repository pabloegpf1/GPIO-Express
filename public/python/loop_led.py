import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

GPIO.setup(17,GPIO.OUT)
GPIO.setup(27,GPIO.OUT)
GPIO.setup(22,GPIO.OUT)

try:
    while True:
        GPIO.output(17,GPIO.HIGH)
        time.sleep(2)
        GPIO.output(17,GPIO.LOW)
        GPIO.output(27,GPIO.HIGH)
        time.sleep(2)
        GPIO.output(27,GPIO.LOW)
        GPIO.output(22,GPIO.HIGH)
        time.sleep(2)
        GPIO.output(22,GPIO.LOW)
except KeyboardInterrupt:
    pass

GPIO.output(17,GPIO.LOW)
GPIO.output(27,GPIO.LOW)
GPIO.output(22,GPIO.LOW)