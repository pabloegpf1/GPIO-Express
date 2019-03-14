#!/usr/bin/env python

import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

print("Hello!")

GPIO.setup(22,GPIO.OUT)

GPIO.output(22,GPIO.HIGH)
time.sleep(2)
GPIO.output(22,GPIO.LOW)
