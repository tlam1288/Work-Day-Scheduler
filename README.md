# Work-Day-Scheduler

This day scheduler allows the user to add events to their work day. The current date is displayed at the top and the schedule below is color coded based on if the time has past, is the current time, or has yet to occur. The user can add events and save it so that it appears the next time they visit the site.

## How it works

The app takes advantage of the funtions moment.js offers. Several functions are used from the library to display and convert the date and time. Each time block has an ID that allows it to get compared to the current time. That allows the color blocks to color the time appropriately. When the user enters an event and clicks the save button, a function is run to make sure there is text value in the textarea next to the button before it is saved to local storage. The events are then displayed back into the same time block that the user originally entered.

## Concepts used

*moment.js library
*Saving user data to local storage to access again
*Using .each() method to check attributes and display events
*Traversing the DOM to display events in appropriate areas

## Link to the Day Scheduler

https://tlam1288.github.io/Work-Day-Scheduler/

![Work Day Scheduler](Assets/DayScheduler.PNG);
