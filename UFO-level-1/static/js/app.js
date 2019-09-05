// from data.js
var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach(function(ufo) {
    var row = tbody.append("tr");

    Object.entries(ufo).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});

// function for filtering table data
function filterTable(tableData) {

    var rows = d3.select("tbody").selectAll("tr");
    rows.remove();

    var dateInput = d3.select(".form-control");
    var inputDate = dateInput.property("value");

    var filteredData = tableData;
    if (inputDate != "") {filteredData = filteredData.filter(ufo => ufo.datetime === inputDate)};
    
    filteredData.forEach(function(ufo) {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

// function for handling button click
function handleClick() {
    d3.event.preventDefault();
    var tableData = data;
    filterTable(tableData);
};

// event listener for filter button
d3.select("#filter-btn").on("click", handleClick);