
var noon = 12;

// Show current time


var showCurrentTime = function()
{

    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // AM or PM
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // Format string
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian;

    clock.innerText = clockTime;
};

// Increment

var updateClock = function()
{
  var time = new Date().getHours();
  var messageText = "";
  var image = "images/flanders.gif";

  var timeEventJS = document.getElementById("timeEvent");
  var tanImageJS = document.getElementById('tanImage');

  console.log(messageText);
  timeEventJS.innerText = messageText;
  tanImage.src = image;

  showCurrentTime();
};
updateClock();

// Second counting

var oneSecond = 1000;
setInterval( updateClock, oneSecond);
