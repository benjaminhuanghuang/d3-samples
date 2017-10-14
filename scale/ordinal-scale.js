var dataset = [1.2, 2.3, 1.9, 1.5, 3.3];

var height = 400,
  width = 600,
  barWidth = 50,
  barOffset = 5;


var min = d3.min(dataset);
var max = d3.max(dataset);

var yScale = d3.scaleLinear()
  .domain([0, max])   // range of data, if use [min, max], you can not see the min bar
  .range([0, height]);     // range of axis, map the min value to 0, max value to 300

var xSale = d3.scaleBand()
.domain(dataset)
.range([0, width]);

d3
  .select("#viz")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .style("background", "#C9D7D6")
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .style("fill", "#C61C6F")
  .attr("width", d=>{
    xSale.barWidth(d);
  })
  .attr("height", function(d) {
    return yScale(d);    //Apply the scale
  })
  .attr("x", function(d, i) {
    return i * (barWidth + barOffset);
  })
  .attr("y", function(d) {
    return height - yScale(d);
  });
