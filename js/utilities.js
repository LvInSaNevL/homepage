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
	var dataSource = "https://api.apixu.com/v1/current.json?key=c0f08c85f51d42b6804114856182809&q=" + Latitude + "," + Longitude
	console.log(dataSource);
	if (!CookieCheck("Weather_Bool")) {
		$.getJSON(dataSource,function(json){
			var currentTemp = Math.round(json.current.temp_f) + "°F";
			var currentWeather = json.current.condition.text;
			console.log(currentTemp + ", " + currentWeather);
			
			CookieGen("Weather_Bool", true);
			CookieGen("Temp", currentTemp);
			CookieGen("Weather", currentWeather);
			
			document.getElementById("weather").innerHTML = currentTemp + ", " + currentWeather;
		});
	}
	else {
		var currentTemp = getCookie("Temp");
		var currentWeather = getCookie("Weather")
		console.log(currentTemp + ", " + currentWeather);
		document.getElementById("weather").innerHTML = currentTemp + ", " + currentWeather;
	}
} 

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function CookieCheck(cname) {
    var cookie = getCookie(cname);
    if (cookie == null) { false; }
    else { true; }
}

function CookieGen(cname, cvalue1, cvalue2) {
    var d = new Date();
    d.setTime(d.getTime() + (20*60*1000));
    var expires = "expires="+ d.toUTCString();
	var cookieString = cname + "=" + cvalue1 + ";" + expires;
    document.cookie = cookieString
}

function GetTime() {
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var d = new Date();
	var dayName = days[d.getDay()];
	var currentTime = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
	document.getElementById("date").innerHTML = dayName + ", " + currentTime;
	
	setTimeout(GetTime, 1000);
}
