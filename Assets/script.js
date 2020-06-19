//displays current date on top of page and concerts it to MM/DD/YYYY
var currentDate = moment().format("L");
$("#currentDay").text("Today's date is: " + currentDate);

//saves current time and converts to HH:MMS
var currentTime = moment().format("LT");
console.log(currentTime);

//finds current hour
var currentHour = moment().hour();
console.log(currentHour);

//event delegating for save buttons
var timeBlockClass = $(".time-block");

timeBlockClass.on("click", function (event) {
  if (event.target.matches("button")) {
    console.log(currentHour);
  }
});

//loops through all divs and saves the ID's in an array
$(".time-block").each(function () {
  var id = parseInt($(this).attr("id"));
  if (id === currentHour) {
    $(this).attr("class", "row time-block present");
  } else if (id < currentHour) {
    $(this).attr("class", "row time-block past");
  } else if (id < currentHour) {
    $(this).attr("class", "row time-block future");
  }
});
