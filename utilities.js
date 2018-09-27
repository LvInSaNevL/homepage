$(document).ready(
    function Start()
    {
       GetTime();
	   GetLocation();
    }
);

function GetLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(ShowPosition);
    } else {
        document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function ShowPosition(position) {
	var Latitude = position.coords.latitude;
	var Longitude = position.coords.longitude;
	var dataSource = 'https://crossorigin.me/' + 'https://api.openweathermap.org/data/2.5/weather?lat=' + Latitude + '&lon=' + Longitude + '&units=imperial&APPID=d79f01b2f356f93e834eb7499e9f5c09'
	console.log(dataSource);
	$.getJSON(dataSource,function(json){
		var currentTemp = Math.round(json.main.temp) + "°F";
		var currentWeather = json.weather[0].description;
		console.log(currentTemp + ", " + currentWeather);
		document.getElementById("weather").innerHTML = currentTemp + ", " + currentWeather;
	});
} 

function GetTime() {
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var d = new Date();
	var dayName = days[d.getDay()];
	var currentTime = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
	document.getElementById("date").innerHTML = dayName + ", " + currentTime;
	
	setTimeout(GetTime, 1000);
}