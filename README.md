# GPIO-Express
Execute python scripts in your Raspberry Pi from an express app

### Purpose
I wanted to create a user interface to be able to interact with my Raspberry Pi's GPIO pins using python. I decided to create a local server that starts on bootup of the Pi and lets you connect to it with an internet browser.

### Functionality
The scripts that I added to the project basically turn on a particular LED during a couple of seconds and then turn off. I also added an "Auto Mode" which loops through all the LED's.

### Circuit
To be able to execute this scripts you'll have to connect the Pi to a breadboard and wire up the LED's to particular GPIO pins, don't forget to add a resistor to your circuit!

### User interface
<p align="center">
<img src="https://i.imgur.com/pKlWWJ5.png" alt="User Interface" width="650">
<p>
  

