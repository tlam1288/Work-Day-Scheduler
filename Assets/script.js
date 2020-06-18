//shows current date and time of page visit
var now = moment();
console.log(now);

//converts date to string
var dateString = moment("12-25-1995", "MM-DD-YYYY");
console.log(dateString);

//shows last sunday
var date = moment().day(-7);
console.log(date);

//checking to see if a date is before. will return boolean
moment("2010-10-20").isBefore("2010-10-21"); // true

//checks to see if date is same time
moment("2010-10-20").isSame("2010-10-20"); // true
