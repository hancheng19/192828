const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://public-holiday.p.rapidapi.com/2019/US",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "84b4e004d4msh6eabc7a0120cf44p1d9ce3jsn5502a62f81e9",
		"x-rapidapi-host": "public-holiday.p.rapidapi.com"
	}
};





function getholiday() {
   var year = document.getElementById("year").value
   var countrycode = document.getElementById("Countrycode").value
   settings.url = "https://public-holiday.p.rapidapi.com/"+ year + "/" + countrycode
   $.ajax(settings).done(function (response) {
   	console.log(JSON.stringify(response,null,4));
   	return response;
   });
}