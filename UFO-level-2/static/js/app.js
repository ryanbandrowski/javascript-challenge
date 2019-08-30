// from data.js
var tableData = data;

// populate table with UFO sightings data
var tbody = d3.select("tbody");

tableData.forEach(function(ufo) {
    var row = tbody.append("tr");

    Object.entries(ufo).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});

// add list of unique shapes from the dataset under the shapes filter input
var flags = [], shapes = [], l = tableData.length, i;
for( i=0; i<l; i++) {
    if( flags[tableData[i].shape]) continue;
    flags[tableData[i].shape] = true;
    shapes.push(tableData[i].shape);
};

var shapeList = d3.select("#shape-types");
shapes.forEach(function(shape) {
    var row = shapeList.append("li");
    row.text(shape);
});

// filter table based on several inputs, accounting for only some of the inputs being used
var button = d3.select("#filter-btn");

button.on("click", function(ufo) {
    var rows = d3.select("tbody").selectAll("tr");
    rows.remove();

    var dateInput = d3.select("#datetime");
    var inputDate = dateInput.property("value");
    var cityInput = d3.select("#city");
    var inputCity = cityInput.property("value");
    var stateInput = d3.select("#state");
    var inputState = stateInput.property("value");
    var countryInput = d3.select("#country");
    var inputCountry = countryInput.property("value");
    var shapeInput = d3.select("#shape");
    var inputShape = shapeInput.property("value");

    var filteredData = tableData;
    if (inputDate != "") {filteredData = filteredData.filter(ufo => ufo.datetime == inputDate);};
    if (inputCity != "") {filteredData = filteredData.filter(ufo => ufo.city == inputCity);};
    if (inputState != "") {filteredData = filteredData.filter(ufo => ufo.state == inputState);};
    if (inputCountry != "") {filteredData = filteredData.filter(ufo => ufo.country == inputCountry);};
    if (inputShape != "") {filteredData = filteredData.filter(ufo => ufo.shape == inputShape);};

    filteredData.forEach(function(ufo) {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});
