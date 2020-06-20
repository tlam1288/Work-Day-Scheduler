//displays current date on top of page and concerts it to MM/DD/YYYY
var currentDate = moment().format("L");
$("#currentDay").text("Today's date is: " + currentDate);

//saves current time and converts to HH:MMS
var currentTime = moment().format("LT");

//finds current hour
var currentHour = moment().hour();

//event delegating for save buttons
var saveBtn = $(".saveBtn");
var textValue = "";

//checks if textarea next to button has values. if yes then click event is added
saveBtn.on("click", function (event) {
  event.preventDefault();
  if ($(this).siblings("textarea").val() !== "") {
    var parentID = $(this).parent().attr("id");
    textValue = $(this).siblings("textarea").val();
    localStorage.setItem(parentID, JSON.stringify(textValue));
    //console.log(parentID);
  } else if ($(this).siblings("textarea").val() === "") {
    textValue = "";
    localStorage.setItem(parentID, textValue);
  }
});

//checks time and sets colors to hours
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

//prints saved evet from local storage
$(".time-block").each(function () {
  var time = $(this).attr("id");
  var local = localStorage.getItem(time);
  $(this).children(".description").html(local);
});
