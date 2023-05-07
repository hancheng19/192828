const weathersettings = {
	"async": true,
	"crossDomain": true,
	"url": "https://aerisweather1.p.rapidapi.com/forecasts/Beijing,cn?plimit=24",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "84b4e004d4msh6eabc7a0120cf44p1d9ce3jsn5502a62f81e9",
		"x-rapidapi-host": "aerisweather1.p.rapidapi.com"
	}
};


function getweather() {
    var city = document.getElementById("city").value;
    var countrycode = document.getElementById("Countrycode").value;
    weathersettings.url = "https://aerisweather1.p.rapidapi.com/forecasts/" + city + "," + countrycode + "?plimit=24";

    $.ajax(weathersettings).done(function (response) {
        var weatherPeriods = response.response[0].periods;
        var weatherTable = '<table><tr><th>Valid Time</th><th>Min Temp (C)</th><th>Max Temp (C)</th></tr>';

        for (var i = 0, len = weatherPeriods.length; i < len; i++) {
            var dateOnly = weatherPeriods[i].validTime.substring(0, 10);
            weatherTable += '<tr><td>' + dateOnly + '</td><td>' + weatherPeriods[i].minTempC + '</td><td>' + weatherPeriods[i].maxTempC + '</td></tr>';
        }

        weatherTable += '</table>';
        document.getElementById("weatherlist").innerHTML = weatherTable;
    });
}
