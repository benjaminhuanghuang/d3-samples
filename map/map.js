const svg = d3
  .select("#viz")
  .append("svg")
  .attr("width", 760)
  .attr("height", 700)
  .style("background-color", "#666666");

d3.json("sweden.geojson", (data)=>{
  var group = svg.selectAll('g')
  .data(data.features)
  .enter()
  .append('g');

  var projection = d3.geoMercator().scale(7300).translate([0,1980]);
  var path = d3.geoPath().projection(projection);
  var areas = group.append('path')
  .attr('d', path)
  .attr('class', 'area')
  .attr('fill', "steelbule");

});
