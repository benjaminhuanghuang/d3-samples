var bardata = [20, 30, 45, 15];

var height = 400,
  width = 600,
  barWidth = 50,
  barOffset = 5;


var min = d3.min(dataset);
var max = d3.max(dataset);

var linear = d3.scale
  .linear()
  .domain([min, max])
  .range([0, 300]);

d3
  .select("#viz")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .style("background", "#C9D7D6")
  .selectAll("rect")
  .data(bardata)
  .enter()
  .append("rect")
  .style("fill", "#C61C6F")
  .attr("width", barWidth)
  .attr("height", function(d) {
    return d;
  })
  .attr("x", function(d, i) {
    return i * (barWidth + barOffset);
  })
  .attr("y", function(d) {
    return height - d;
  });
