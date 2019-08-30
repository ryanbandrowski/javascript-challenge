// from data.js
var tableData = data;

// populate the table with the UFO data
var tbody = d3.select("tbody");

tableData.forEach(function(ufo) {
    var row = tbody.append("tr");

    Object.entries(ufo).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});

// 
var button = d3.select("#filter-btn");

button.on("click", function(ufo) {
    var rows = d3.select("tbody").selectAll("tr");
    rows.remove();
    var inputElement = d3.select(".form-control");
    var inputDate = inputElement.property("value");
    var filteredData = tableData.filter(ufo => ufo.datetime === inputDate);
    if (inputDate == "") {
        filteredData = tableData;
        filteredData.forEach(function(ufo) {
            var row = tbody.append("tr");
            Object.entries(ufo).forEach(function([key, value]) {
                var cell = row.append("td");
                cell.text(value);
            });
        });
    }
    else { 
        filteredData.forEach(function(ufo) {
            var row = tbody.append("tr");
            Object.entries(ufo).forEach(function([key, value]) {
                var cell = row.append("td");
                cell.text(value);
            });
        });
    };
});

// 