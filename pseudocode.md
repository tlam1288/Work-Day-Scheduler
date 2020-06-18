WHEN planner is opened the current date is displayed at the top of calendar
-use current date function or Moment.js
-use jquery \$() to select HTML element to display the date

THe time blocks are colored coded based on if its a past, present, or future event
IF a past event THEN a color
IF a current event THEN a color
IF a future event THEN a color

WHEN an event block is "clicked" you can edit the text of the event
-add event listener for the edit button click to allow to change HTML text

WHEN saved button is clicked
-add event listener for save button
-WHEN button is selected, the data is saved into localStorage
-localStorage.setItem to save
-localStorage.getIetem to get and to show the event again when page is refreshed

SHOW saved data from local storage on the page
