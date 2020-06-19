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
var saveBtn = $(".saveBtn");
var description = $(".description");
var scheduler = $("#scheduler");
var timeBlock = $(".time-block");
var textValue = "";

//checks if textarea next to button has values. if yes then click event is added
saveBtn.on("click", function () {
  if ($(this).siblings("textarea").val() !== "") {
    alert("hi");
  } else {
    alert("no");
  }
});

//loops through all divs and saves the ID's in an array
$(".time-block").each(function () {
  var id = parseInt($(this).attr("id"));
  if (id === currentHour) {
    $(this).attr("class", "row time-block present");
  } else if (id < currentHour) {
    $(this).attr("class", "row time-block past");
  } else if (id > currentHour) {
    $(this).attr("class", "row time-block future");
  }
});
