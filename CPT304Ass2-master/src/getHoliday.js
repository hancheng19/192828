const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://public-holiday.p.rapidapi.com/2019/US",
    "dataType": 'JSON',
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "84b4e004d4msh6eabc7a0120cf44p1d9ce3jsn5502a62f81e9",
        "x-rapidapi-host": "public-holiday.p.rapidapi.com"
    }
};

function getholiday() {
    var year = document.getElementById("year").value;
    var countrycode = document.getElementById("Countrycode").value;
    settings.url = "https://public-holiday.p.rapidapi.com/" + year + "/" + countrycode;
    $.ajax(settings).done(function (response) {
        console.log(JSON.stringify(response, null, 4));

        let table = document.getElementById("holidaylist");
        table.innerHTML = "";

        // 创建表头
        let thead = table.createTHead();
        let headerRow = thead.insertRow();
        let dateHeader = headerRow.insertCell();
        let localNameHeader = headerRow.insertCell();

        dateHeader.textContent = "Date";
        localNameHeader.textContent = "Local Name";

        // 插入表格数据
        for (let i = 0; i < response.length; i++) {
            let row = table.insertRow();
            let dateCell = row.insertCell();
            let localNameCell = row.insertCell();

            dateCell.textContent = response[i].date;
            localNameCell.textContent = response[i].localName;
        }
    });
}
