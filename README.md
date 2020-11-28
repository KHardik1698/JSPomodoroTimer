# JavaScript PomodoroTimer

This Repository contains a simple Pomodoro Timer Application made using Vanilla JavaScript Functions.\
It gives the functionality to Start the Timer, Pause the Timer, & Reset the Timer.\
It has options to change the Current timer from Default to Pomodoro Timer & Short Break Timer.\
It also has the option to increase or decrease the current time by 1 minute.
It uses setInterval() & clearInterval() functions of JS to perform the Timer functionality.\
It also uses the concepts of DOM Manipulation to dynamically update the contents on the Webpage.\
The Timer also has an Internal Status to check whether the Timer is running or not.\
By default the status is "false".

# Start Button:

The Start Timer button calls the startTimer() fucntion on click.\
It sets the status to "true" if it is "false" when it starts.\
Then it calls the setInterval method which has a duration of 1000 milliseconds.\
Here, all the calculation of hours, minutes & seconds is done.\
A preceeding 0 is also added for single digits.\
An alert is raised when the timer expires after reaching the time of 00:00:00.\
There is another alert which shows the elapsed Time at the end.\
Then the status is set to "false" & the clearInterval() function is called.\
If the timer is running, the Timer value is updated after every 1 second.\
The seconds value keeps increasing & the elapsed value also increases.\
The elapsed value is always displayed on the Head Title/Page Title until the Timer is Reset.\
The Current Timer value is set to "Default" from "None".

# Pause Button:

The Pause Timer button calls the stopTimer() function on click.\
It sets the status to "false" & the clearInterval() function is called.

# Reset Button:

The Reset Timer Button calls the resetTimer() function on click.\
It sets the status to "false" & the clearInterval() function is called.\
It sets the hours & seconds to 0 & the minutes to 25.\
The timer value is also set to 00:25:00.\
An alert is raised displaying the elapsed Time in Hours, Minutes & Seconds.\
Then the elapsed value is also set to 0.\
Then the elapsed time is removed from the Head Title/Page Title.\
The Current Timer value is set to "None" from either of the 3 values, i.e. "Default", "Pomodoro" or "Short Break".

# Pomodoro Timer:

The Pomodoro Timer Button takes the User Input for the Timer Duration.\
The Input value is the checked for valid input by inputValidation() function.\
If the Input is valid, then that value is assigned to the minutes, otherwise the default of 25 minutes are assigned.\
The maximum time in minutes which can be entered is 60.\
The values of hours & seconds is set to 0.\
The Input field is also cleared after the completion of validation.\
The Current Timer value is set to "Pomodoro" from either of the 3 values, i.e. "None", "Default" or "Short Break".

# Short Break Timer:

The Short Break Timer Button takes the User Input for the Timer Duration.\
The Input value is the checked for valid input by inputValidation() function.\
If the Input is valid, then that value is assigned to the minutes, otherwise the default of 5 minutes are assigned.\
The maximum time in minutes which can be entered is 15.\
The values of hours & seconds is set to 0.\
The Input field is also cleared after the completion of validation.\
The Current Timer value is set to "Short Break" from either of the 3 values, i.e. "None", "Default" or "Pomodoro".

# Increase Time:

The Increase Time Button (+1 Minute) is used to increase the current Timer duration by 1 minute.\
It will only update the Current Timer by 1 Minute.\
It will also increase the value of hours by 1 when minutes are 59 & hours is less than 23.

# Decrease Time:

The Decrease Time Button (-1 Minute) is used to decrease the current Timer duration by 1 minute.\
It will only update the Current Timer by 1 Minute.\
It will also decrease the value of hours by 1 when minutes are 0 & hours is greater than 0.

# Input Validation:

The Input Validation function i.e. inputValidation() is used to validate the user Input for Pomodoro & Short Timer.\
If the Input is given for Pomodoro, the Input is passed along with the Limit value of 60.\
If the Input is given for Short Break, the Input is passed along with the Limit value of 15.\
The Limit value is the maximum number of Minutes which can be given to that particular Timer.\
The Input is divided into 2 parts, one is the original input which is a string, & the other is a number which is converted from string to a number using parseInt() function.\
Now, 3 values are passed to the isValid() function, i.e. "num" which is the number, "str" which is the string, & "limit" which is the maximum minutes for that particular Timer.\
Now the isValid function is where all our Validation is checked.\
The various validation conditions are:\
If str not is equal to num & str.length is greater than 0,\
if str.length is greater than 2,\
if num is between 0 & 60,\
if str is equal to num & str.length is not 1 but greater than 2,\
if str.length is equal to 0,\
if num is greater than value.\
All of these conditions determine some sort of an Invalid Input, & will give some sort of alert.\
If all these conditions are passed, only then a boolean "true" is returned.

# Demo:

Live Demo of the JavaScript Timer can be found here:\
https://khardik1698.github.io/JSPomodoroTimer/
