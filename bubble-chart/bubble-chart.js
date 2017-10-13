const svg = d3
  .select("#viz")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500)
  .style("background-color", "#b4b4b4")
  .append("g")
  .attr("transform", "translate(0,0)");


var simulation = d3.forceSimulation();

d3.queue()
  .defer(d3.csv, "sales.csv")
  .await(ready);

function ready(err, datapoints)
{
  var circle = svg.selectAll(".artist")
  .data(datapoints)
  .enter()
  .append('circle')
  .attr("class", "artist")
  .attr("r", 10)
  .attr("fill", "lightblue")
  .attr("cx",100)
  .attr("cy",100)
}

