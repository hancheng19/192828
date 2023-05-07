const getHotelsettings = {
	"async": true,
	"crossDomain": true,
	"url": "https://hotels4.p.rapidapi.com/locations/search?query=Nanning&locale=en_US",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "84b4e004d4msh6eabc7a0120cf44p1d9ce3jsn5502a62f81e9",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
};

var hotelist;
function getHotels() {
    var city = document.getElementById("city").value;
    getHotelsettings.url = "https://hotels4.p.rapidapi.com/locations/search?query=" + city + "&locale=en_US";

    $.ajax(getHotelsettings).done(function (response) {
        var hotels = response.suggestions.find(suggestion => suggestion.group === "HOTEL_GROUP").entities;
        var hotelTable = '<table><tr><th>Name</th><th>Caption</th></tr>';

        for (var i = 0; i < hotels.length; i++) {
            hotelTable += '<tr><td>' + hotels[i].name + '</td><td>' + hotels[i].caption + '</td></tr>';
        }

        hotelTable += '</table>';
        document.getElementById("hotellist").innerHTML = hotelTable;
    });
}
