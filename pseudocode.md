WHEN planner is opened the current date is displayed at the top of calendar
-display inside #currentDay <p>
-use current date function or Moment.js
-use jquery \$() to select HTML element to display the date - create <div> elements and add class = past, present, future
$("<div>).attr("class", "past"), $("<div>).attr("class", "present"), \$("<div>).attr("class", "future")
-append these into the main div body
-Create time block and display only a certain time block

THe time blocks are colored coded based on if its a past, present, or future event
IF after #currentDay THEN class = past THEN a GREY
IF same as #currentDay THEN class = present THEN a BLUE
-make conditional to check if current HOUR matches
IF before #currentDay THEN class = future THEN a GREEN

WHEN an event block is "clicked" you can edit the text of the event
-add event listener for the edit button click to allow to change HTML text

WHEN saved button is clicked
-add event listener for save button
-WHEN button is selected, the data is saved into localStorage
-localStorage.setItem to save
-localStorage.getIetem to get and to show the event again when page is refreshed

SHOW saved data from local storage on the page
