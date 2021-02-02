var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

//BEGIN updateClock function
var updateClock = function() {

	//getting time element
var timeEventJS = document.getElementById("timeEvent");
// getting image element
var lolcat = document.getElementById("lolcat");
//define image var and set default:
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

if (time == partyTime){
    messageText = "IZ PARTEE TIME!!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
} else if (time == napTime) {
    messageText = "IZ NAP TIME...";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
} else if (time == lunchTime) {
    messageText = "IZ NOM NOM NOM TIME!!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
} else if (time == wakeUpTime) {
    messageText = "IZ TIME TO GETTUP.";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
} else if (time < noon) {
    messageText = "Good morning!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
} else if (time > evening) {
    messageText = "Good Evening!";
} else {
    messageText = "Good afternoon!";
}
timeEventJS.innerText = messageText;
lolcat.src = image;
	
	//Skillcrush copy/paste code:
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
	/*This makes it so that the clock reads as "1:00" rather than military time. If the time is "13", subtract 12 and what's displayed is 1.*/
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
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};
showCurrentTime();
	
}; // End updateClock function

updateClock();

var oneSecond = 1000;

//START partyTime Event
//grab the button from HTML
var partyTimeButton = document.getElementById("partyTimeButton");
//set the iPT variable to false
var isPartyTime = false;
//create a function for the partyEvent
var partyEvent = function()
{
	/*Here, "isPartyTime" has already been set to false. We use triple equals because this basically says "false === false".*/
	if (isPartyTime === false)
//then display in the button: "PARTY TIME!" and make the color #222.
	{
		isPartyTime = true;
		time = partyTime;
		partyTimeButton.innerText = "Party Over";
	partyTimeButton.style.backgroundColor = "#222";
	}
	else {
		isPartyTime = false;
		time = new Date().getHours();
		partyTimeButton.innerText = "PARTY TIME!";
	partyTimeButton.style.backgroundColor = "pink";
	}
};
//make the button listen for a click
/* This connects the function "partyEvent" to a specific action - you don't need to run the function separately*/
partyTimeButton.addEventListener("click", partyEvent);
//Time selector feature
//wakeUpTime
//get at the wakeUpTimeSelector HTML element
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
//BEGIN wakeUpTime FUNCTION
var wakeUpEvent = function()
{
	wakeUpTime = wakeUpTimeSelector.value;
}; //END wakeUpTime FUNCTION
/*Add an event listener for when a user chooses a value - AKA a "change"*/
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

//lunchTime
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
//BEGIN lunchTimeEvent FUNCTION
var lunchTimeEvent = function()
{
	lunchTime = lunchTimeSelector.value;
}; //END lunchTimeEvent FUNCTION
//add your event listener
lunchTimeSelector.addEventListener("change", lunchTimeEvent);
//napTime
var napTimeSelector = document.getElementById("napTimeSelector");
//BEGIN napTime FUNCTION
var napTimeEvent = function()
{
	napTime = napTimeSelector.value;
}; //END napTime FUNCTION
napTimeSelector.addEventListener("change", napTimeEvent);

setInterval(updateClock, oneSecond);